import React, { Component } from "react";
import "../../Styles/Components/notification.css";

import { ImNotification } from "react-icons/im";

import EventEmitter from "event-emitter";

const emitter = new EventEmitter();

export const notify = (msg) => {
  emitter.emit("notification", msg);
};

class Notification extends Component {
  timeout = null;

  state = {
    displayNotify: false,
    msg: "",
  };

  em = emitter.on("notification", (msg) => {
    this.onShow(msg);
  });

  onShow = (msg) => {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.setState(
        {
          displayNotify: false,
        },
        () => {
          this.timeout = setTimeout(() => {
            this.showNotification(msg);
          }, 500);
        }
      );
    } else {
      this.showNotification(msg);
    }
  };

  showNotification = (msg) => {
    this.setState(
      {
        displayNotify: true,
        msg,
      },
      () => {
        this.timeout = setTimeout(() => {
          this.setState({
            displayNotify: false,
          });
        }, 3000);
      }
    );
  };
  render() {
    return (
      <div
        className={
          this.state.displayNotify
            ? "notification__container hide__container"
            : "notification__container"
        }
      >
        <span className="notification__icon">
          <ImNotification />
        </span>
        <span className="notification__msg">{this.state.msg}</span>
      </div>
    );
  }
}

export default Notification;
