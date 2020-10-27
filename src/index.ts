import axios from 'axios'

export const checkVerified = (address: string) => {

	return axios({
			url: 'https://arweave.net/graphql',
			method: 'post',
			data: {
					variables: {
							address: address,
							authNodes: ["s-hGrOFm1YysWGC3wXkNaFVpyrjdinVpRKiVnhbo2so"],
					},
					query: `
							query transactions($authNodes: [String!], $address: String!) {
								transactions(
									owners: $authNodes
									tags: [
										{ name: "App-Name", values: ["ArVerifyDev"] }
										{ name: "Type", values: ["Verification"] }
										{ name: "Address", values: [$address] }
									]
								) {
									edges {
										node {
											id
											tags {
												name
												value
											}
										}
									}
								}
							}
							`
			}
	}).then((result) => {
			let edges = result.data.data.transactions.edges
			return edges.length > 0
	})
}

// function verify(){
// 	$(".address").each(async function (i) {
// 			let addressElement = $(this)

// 			try {
// 					let isVerified = await checkVerified(addressElement.text().trim())
// 					if (isVerified) {
// 							addressElement.append("&check;");
// 					}
// 			} catch (e) {

// 			}
// 	})
// }

