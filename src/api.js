// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const DeveloperAPI = {
  developers: [
    { number: 1, name: "Nabeel", ghPage: "https://github.com/ns4000" },
    { number: 2, name: "Maxi", ghPage: "https://github.com/palomitaproy" },
    { number: 3, name: "Ayham", ghPage: "https://github.com/ayhamk94" },
    { number: 4, name: "Asjad ", ghPage: "https://github.com/asjadbaig" }
  ],
  all: function() { return this.developers},
  get: function(id) {
    const isDeveloper = p => p.number === id
    return this.developers.find(isDeveloper)
  }
}

export default DeveloperAPI
