// import React from "react";

// class UserClass extends React.Component{
//     constructor(props){
//         super(props)
//         console.log(props)
//     }
//     render(){
//         return (
//             <>
//                 <div>
//                     <h2>Name : {this.props.name}</h2>
//                     <h2>Location : {this.props.location}</h2>
//                 </div>
//             </>
//         )
//     }

// }

// export default UserClass



import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props)
         //state
    this.state = {
        count : 40,
        count2 : 56,
    }
    }
   

    render(){
        const {name} = this.props
        return (
            <>
                <div>
                    <h3>Name : {name}</h3>
                    <h3>Location : {this.props.location}</h3>
                    <h4>{this.state.count}</h4>
                    <h4>{this.state.count2}</h4>
                </div>
            </>
        )
    }
}

export default UserClass;