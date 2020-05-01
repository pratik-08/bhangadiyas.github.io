import React, { Component, Dispatch } from 'react';
import { Button, Table } from 'react-bootstrap';
import { getPerson } from '../utils/customeAPI';
import * as Models from "../models/models";


interface State {
  name: string;
  id: string;
  notes: string;
  friends: [];
  person: Models.Person | null;
}

// interface ActionProps {
//   onDoApply: (force?: boolean) => void;
// }

interface Props {
  onDoApply: (force?: boolean) => void;
}

// function bindActions(dispatch: Dispatch<any>): MappedActionProps<ActionProps> {
//   return {
//     onDoApply: (force?: boolean) => dispatch(doApply(force))
//   }
// }

class Family extends React.Component<Props, State>  {
  constructor(props: Props) {
    super(props);
    this.state = {
      friends: [],
      name: '',
      id: '',
      notes: '',
      person: null
    };

    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // get all entities - GET
  }

  create(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    // add entity - POST
    console.log("create ...!!!");
    e.preventDefault();
  }

  update(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    // update entity - PUT
    console.log("update ...!!!");
    e.preventDefault();
  }

  delete(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    // delete entity - DELETE
    console.log("delete ...!!!");
    e.preventDefault();
  }

  handleChange(changeObject: any) {
    console.log("handleChange ...!!!");
    this.setState(changeObject)
  }

  private getPersonData = () => {
    // const { onDoApply } = this.props;
    if (this.state.name)
      console.log("getPersonData value:" + this.state.name);

    // this will update entries with PUT
    const data: Models.Person = getPerson(this.state.name);
    // fetch("https://fairestdb.p.rapidapi.com/friend/friendModel", {
    //   "method": "PUT",
    //   "headers": {
    //     "x-rapidapi-host": "fairestdb.p.rapidapi.com",
    //     "x-rapidapi-key": API_KEY,
    //     "content-type": "application/json",
    //     "accept": "application/json"
    //   },
    //   "body": JSON.stringify({
    //     _id: this.state.id,
    //     name: this.state.name,
    //     notes: this.state.notes
    //   })
    // })
    //   .then(response => response.json())
    //   .then(response => {
    //     console.log(response);
    //   })
    // //   .catch(err => { console.log(err); });
    // onDoApply();

    console.log("person data:" + JSON.stringify(data));
    this.setState({ person: data });

  }

  private handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // if (event && event.target)
    //   console.log("handleInputChange value:" + event.target.value);

    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <>
        <div>
          <div className="searchForm">
            <form>
              <input
                // class="form-control"
                placeholder="Search for..."
                value={this.state.name}
                onChange={this.handleInputChange}
              />
              <br /><br />
              <Button variant="primary" onClick={this.getPersonData}>Get Person Data</Button>
            </form>
          </div>
        </div>
        <br /><br />
        {this.state.person && this.state.person !== {} && <div>
          <Table id="global-table">
            <thead>
              <tr className="header-row">
                <th>ID</th>
                <th>Name</th>
                <th>Birth Date</th>
                <th>Birth Place</th>
                <th>Gender</th>
                <th>Spouse Name</th>
                <th>Children Names</th>
                <th>Mother</th>
                <th>Father</th>
              </tr>
            </thead>
            <tbody>
              {this.state.person &&
                <tr>
                  <td>{this.state.person.id}</td>
                  <td>{this.state.person.name}</td>
                  <td>{this.state.person.birthDate}</td>
                  <td>{this.state.person.birthPlace}</td>
                  <td>{this.state.person.gender}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              }
            </tbody>
          </Table>
        </div>}
      </>
    );
  }
}


export { Family };
