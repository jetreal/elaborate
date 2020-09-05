import { TEST
} from "./constants";

export type InitialStateType = {
  footerLinksLeft: Array<Object>
  footerLinksCenter: Array<Object>
  footerLinksRight: Array<Object>
}

let initialState: InitialStateType = {
  footerLinksLeft: [
    {id: 1, name: "Investors", url: "/"},
    {id: 2, name: "Customers", url: "/"},
    {id: 3, name: "Startups", url: "/"},
    {id: 4, name: "Freelancers", url: "/"}
  ],
  footerLinksCenter: [
    {id: 1, name: "About", url: "/"},
    {id: 2, name: "How to", url: "/"},
    {id: 3, name: "Help", url: "/"}
 
  ],
  footerLinksRight: [
    {id: 1, name: "Facebook", url: "/"},
    {id: 2, name: "Twitter", url: "/"},
    {id: 3, name: "Medium", url: "/"}
  ]
}

// export type InitialStateType = typeof initialState

const MainPageReducer = (state = initialState, action: any): InitialStateType => {
switch (true) {
  
  case (action.type === TEST) : {
      return {...state }
  }
  
  default:
      return {...state}
}
}



export default MainPageReducer