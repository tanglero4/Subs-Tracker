const { AuthenticationError } = require("apollo-server-express");
const { User, Subscriptions } = require("../models");
// const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        allSubs: async () => {
            return Subscriptions.find({});
          },
        findSub: async (parent, { _id }) => {
        const params = _id ? { _id } : {};
        return Subscriptions.find(params);
        },
    },
    Mutation: {
        newSub: async (parent, args) => {
            const subscription = await Subscriptions.create(args);
            return subscription;
          },
        deleteSub: async (parent, { _id }) => {
        return Subscriptions.findOneAndDelete({ _id: _id });
        },
        updateSubscription: async (parent, { id, input }) => {
            const subscription = await Subscriptions.findByIdAndUpdate(id, input, { new: true });
            return subscription;
          },
    }




}



module.exports = resolvers