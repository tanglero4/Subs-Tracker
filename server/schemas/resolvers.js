const { AuthenticationError } = require("apollo-server-express");
const { User, Subscription } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        allSubs: async () => {
            return Subscription.find({});
          },
        findSub: async (parent, { _id }) => {
        const params = _id ? { _id } : {};
        return Subscription.find(params);
        },
        me: async (parent, args, context) => {
          if (context.user) {
            return User.findOne({ _id: context.user._id }).populate('subscriptions');
          }
          throw new AuthenticationError('You need to be logged in!');
        },
    },
    Mutation: {
      addUser: async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
        return { token, user };
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('No user found with this email address');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const token = signToken(user);
  
        return { token, user };
      },
        newSub: async (parent, args) => {
            const subscription = await Subscription.create(args);
            return subscription;
          },
        deleteSub: async (parent, { _id }) => {
        return Subscription.findOneAndDelete({ _id: _id });
        },
        updateSubscription: async (parent, { id, input }) => {
            const subscription = await Subscription.findByIdAndUpdate(id, input, { new: true });
            return subscription;
          },
    }




}



module.exports = resolvers