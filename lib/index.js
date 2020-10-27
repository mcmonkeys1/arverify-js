"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkVerified = void 0;
var axios_1 = __importDefault(require("axios"));
function checkVerified(address) {
    return axios_1.default({
        url: 'https://arweave.net/graphql',
        method: 'post',
        data: {
            variables: {
                address: address,
                authNodes: ["s-hGrOFm1YysWGC3wXkNaFVpyrjdinVpRKiVnhbo2so"],
            },
            query: "\n\t\t\t\t\t\t\tquery transactions($authNodes: [String!], $address: String!) {\n\t\t\t\t\t\t\t\ttransactions(\n\t\t\t\t\t\t\t\t\towners: $authNodes\n\t\t\t\t\t\t\t\t\ttags: [\n\t\t\t\t\t\t\t\t\t\t{ name: \"App-Name\", values: [\"ArVerifyDev\"] }\n\t\t\t\t\t\t\t\t\t\t{ name: \"Type\", values: [\"Verification\"] }\n\t\t\t\t\t\t\t\t\t\t{ name: \"Address\", values: [$address] }\n\t\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t\t) {\n\t\t\t\t\t\t\t\t\tedges {\n\t\t\t\t\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\t\t\ttags {\n\t\t\t\t\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t"
        }
    }).then(function (result) {
        var edges = result.data.data.transactions.edges;
        return edges.length > 0;
    });
}
exports.checkVerified = checkVerified;
//# sourceMappingURL=index.js.map