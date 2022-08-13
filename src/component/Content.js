import { Component } from "react";

class Content extends Component {

    showInfo(info){
        alert('informasi' + info)
    }
    render() {
        return(
            <div className="contrainer-lg">
                <table className="table table-striped mt-4">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Yayah</td>
                            <td>Tegal</td>
                            <td>
                                <button onClick={() => this.showInfo(1)}>Show</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Nurul</td>
                            <td>Tegal</td>
                            <td>
                                <button onClick={() => this.showInfo(2)}>Show</button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Saffa</td>
                            <td>Brebes</td>
                            <td>
                                <button onClick={() => this.showInfo(3)}>Show</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Content;