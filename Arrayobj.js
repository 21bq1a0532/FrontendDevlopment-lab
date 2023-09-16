import React,{Component} from 'react'
class Arrayobj extends Component
{
    constructor(props)
    {
        super(props);
        this.state={studentdetails:
        [
            {sno:1,sname:"ram",sadd:"Vizag"},
            {sno:2,sname:"raj",sadd:"hyderabad"},
            {sno:3,sname:"ravi",sadd:"guntur"}
        ]
        }
    }
    render()
    {
            const {studentdetails}=this.state;
            return(
                <div>
                    <table border={1}>
                        <tr>
                            <th>Student Number</th>
                            <th>Student Name</th>
                            <th>Address</th>
                        </tr>
                        {studentdetails.length>0 && studentdetails.map((student)=>{
                            return <tr key={student.sno}>
                                <td>{student.sno}</td>
                                <td>{student.sname}</td>
                                <td>{student.sadd}</td>
                            </tr>
                        })}
                    </table>
                </div>
            )
    }
}
export default Arrayobj;