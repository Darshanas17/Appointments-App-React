import { Component } from "react";

import { format } from "date-fns";

import { v4 as uuidv4 } from "uuid";

import AppointmentItem from "../AppointmentItem";

import "./index.css";

const testArray = [
  {
    id: uuidv4(),
    title: "General Checkup",
    date: format(new Date(2021, 0, 7), "dd MMMM yyyy, EEEE"), // January 7, 2021
    isStarted: true,
  },
  {
    id: uuidv4(),
    title: "Dental Consultation",
    date: format(new Date(2021, 1, 14), "dd MMMM yyyy, EEEE"), // February 14, 2021
    isStarted: false,
  },
  {
    id: uuidv4(),
    title: "Eye Examination",
    date: format(new Date(2021, 2, 21), "dd MMMM yyyy, EEEE"), // March 21, 2021
    isStarted: false,
  },
  {
    id: uuidv4(),
    title: "Physiotherapy Session",
    date: format(new Date(2021, 3, 28), "dd MMMM yyyy, EEEE"), // April 28, 2021
    isStarted: true,
  },
  {
    id: uuidv4(),
    title: "Cardiology Checkup",
    date: format(new Date(2021, 4, 5), "dd MMMM yyyy, EEEE"), // May 5, 2021
    isStarted: false,
  },
  {
    id: uuidv4(),
    title: "Vaccination Appointment",
    date: format(new Date(2021, 5, 12), "dd MMMM yyyy, EEEE"), // June 12, 2021
    isStarted: true,
  },
];

class Appointments extends Component {
  state = {
    title: "",
    date: "",
    appointmentsList: testArray,
    isButtonStarred: false,
  };

  onChangeTitle = (event) => {
    this.setState({ title: event.target.value });
  };

  onChangeDate = (event) => {
    this.setState({ date: event.target.value });
  };

  onAdd = (event) => {
    event.preventDefault();
    const { title, date } = this.state;
    const newAppointment = {
      id: uuidv4(),
      title,
      date: format(new Date(date), "dd MMMM yyyy, EEEE"),
      isStarted: false,
    };

    this.setState((prevState) => ({
      appointmentsList: [newAppointment, ...prevState.appointmentsList],
      title: "",
      date: "",
    }));
  };

  onClickStarred = () => {
    this.setState((prevState) => ({
      isButtonStarred: !prevState.isButtonStarred,
    }));
  };

  onClickStarIcon = (id) => {
    this.setState((prevState) => ({
      appointmentsList: prevState.appointmentsList.map((eachItem) => {
        if (id === eachItem.id) {
          return { ...eachItem, isStarted: !eachItem.isStarted };
        }
        return eachItem;
      }),
    }));
  };

  filterAppointmentList = () => {
    const { appointmentsList } = this.state;
    const filteredList = appointmentsList.filter(
      (eachItem) => eachItem.isStarted === true
    );
    return filteredList;
  };

  render() {
    const { title, date, isButtonStarred, appointmentsList } = this.state;
    const buttonClassStarred = isButtonStarred
      ? "starred-button"
      : "star-button";
    const filteredAppointmentList = isButtonStarred
      ? this.filterAppointmentList()
      : appointmentsList;
    return (
      <div className="bg-cont">
        <div className="cont">
          <div className="appointment-cont">
            <div className="sub-appointment-cont">
              <h1 className="head-1">Add appointment</h1>
              <form className="form-cont" onSubmit={this.onAdd}>
                <label className="label" htmlFor="title">
                  Title
                </label>
                <input
                  id="title"
                  value={title}
                  onChange={this.onChangeTitle}
                  className="input"
                  placeholder="Title"
                />

                <label className="label" htmlFor="date">
                  Date
                </label>
                <input
                  id="date"
                  value={date}
                  type="date"
                  className="input"
                  onChange={this.onChangeDate}
                />

                <button type="submit" className="button">
                  Add
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="img"
            />
          </div>
          <hr className="horizontal-line" />
          <div className="appointment-list-cont">
            <div className="appointment-list-cont-row-one">
              <h1 className="head-2">Appointments</h1>
              <button
                className={buttonClassStarred}
                type="button"
                onClick={this.onClickStarred}
              >
                Starred
              </button>
            </div>
            <ul className="appointment-list-elements">
              {filteredAppointmentList.map((eachItem) => (
                <AppointmentItem
                  eachItem={eachItem}
                  key={eachItem.id}
                  onClickStarIcon={this.onClickStarIcon}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Appointments;
