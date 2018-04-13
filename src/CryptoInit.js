import React, { Component } from 'react';

export default class CryptoInit extends Component {

  constructor(props) {
    super(props)
    this.state = {
      firstTimeFloaters: props.firstTimeFloaters,
      step: props.step,
      csvfileNames: props.csvfileNames,
      loading: true,
    }
  }

  componentDidMount () {
    this.setState({
      loading: false
    })
  }

  updateFirstTimeFloatList = () => {
    if (Object.keys(this.state.firstTimeFloaters))
      return this.state.firstTimeFloaters.map((f, index) => <tr key={f.ID}><th scope="row">{index + 1}</th><td>{f['Customer First Name']}</td><td>{f['Customer Last Name']}</td><td>{f['Customer Email']}</td></tr>)
    return (<li className='text-danger' style={{'listStyle':'none'}} key={666}><strong>ERROR</strong></li>)
  }

  showCSVParseResults = () => {
    return (
      <div className="card">
        <div className="card-header">
          <strong>1st Time Floater Follow Up Automation:  </strong> Upload to Mailchimp <small>(Step {this.state.step} of 3)</small>
        </div>
        <div className="card-block">
          <section>
          <h6 className='float-left'>{this.state.firstTimeFloaters.length} New Floaters Found in {this.state.csvfileNames}</h6>
          <br />
          <hr />
            <table className="table table-hover table-sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                {this.updateFirstTimeFloatList()}
              </tbody>
            </table>
            <br />
            <button type="button" onClick={() => { this.setState({ step: 3 }) }} className="btn btn-primary btn-lg btn-block"><i className="icon-cloud-upload"></i> Add to Mailchimp Automation Queue</button>
          </section>
        </div>
      </div>
    )
  }

  render () {
    return (
      <div className="row">
        <div className="col-md-12">
        {this.state.loading ?
          <Loading />
          :
          this.state.step === 2 && this.state.step !== 1 ? this.showCSVParseResults() : <UploadToMailchimp step={this.state.step} firstTimeFloaters={this.state.firstTimeFloaters}/>
        }
        </div>
      </div>
    )
  }
}
