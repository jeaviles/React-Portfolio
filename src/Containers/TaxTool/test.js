const codes = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]

const states = ["Alabama", "Alaska", "Arizona", "Arkansas", " California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]

let userType = "dollars"

let userData = getTaxData(25000,userType)

let maxValue = Math.max(userData)

let chartTitle = ''
let subTitle = ''

console.log(userData)

if(userType === "dollars"){
  subTitle = "Dollars $"
  chartTitle = "2018 US Dollars Levied by State"
}
else{
  subTitle = "Tax Rate %"
  chartTitle = "2018 US Effective Tax Rates by State"
}

makeUSAMap(codes,userData,states,maxValue,subTitle,chartTitle)
makeBarChart(states,userData,subTitle,chartTitle)
makeHeatMap(codes,userType,subTitle,chartTitle)
