import React ,{Component} from 'react';

class Welcome extends Component{
    render(){
        const {
            name
        }=this.props
        return <h1>HELLO {name} FROM CLASS</h1>
    }
}

export default Welcome