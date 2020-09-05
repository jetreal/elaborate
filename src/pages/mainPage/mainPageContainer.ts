import { connect } from 'react-redux';
import MainPage from './MainPage';

// import {
//         } from '../../redux/Actions';


let mapStateToProps = (state: any) => {
  return {
    MainPageReducer: state.MainPageReducer
  }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         // handleClick: (id) => {
//         //     dispatch(button1ClickAC(id))
//         // }
//     }
// }

const MainPageContainer = connect(mapStateToProps,
  {

  })(MainPage
  )

export default MainPageContainer