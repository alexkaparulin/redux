import React,{Component} from 'react'

class Datacruncher extends Component {

    render(){
        const {user,fetchData}= this.props
        return(
            <div>
                <button onClick={fetchData}>Press here for some info</button>
                <br/>
                <br/>
                <textarea cols='60' rows='10' value={user}></textarea>
            </div>
        )
    }

}

export default Datacruncher;