// React-related
import React from 'react'

class NotFoundComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    render() {
        return (
            <div className="container marginTop-30">
                <h2 style={{ margin: 0 }}>Not Found</h2>

                <p>
                    What you're looking for is not here!
                </p>
            </div>
        )
    }
}

export default NotFoundComponent