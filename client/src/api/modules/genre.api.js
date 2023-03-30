import publicClient from "../client/public.client";

const genreEndpoint = {
    list: ({mediaType}) => `${mediaType}/genres`
};

const genreApi = {
    getList: async ({mediaType}) => {
        try {
            const response = await publicClient.get(genreEndpoint.list({mediaType}));

            return { response };
        } catch (err) { return { err }; }
    }
};

export default genreApi;