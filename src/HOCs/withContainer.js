import React from "react";

const withContainer = Component => {
  class WithContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        fields: [
          {
            num: 0,
            columns: [
              { num: 0, active: "none" },
              { num: 1, active: "none" },
              { num: 2, active: "none" }
            ]
          },
          {
            num: 1,
            columns: [
              { num: 0, active: "none" },
              { num: 1, active: "none" },
              { num: 2, active: "none" }
            ]
          },
          {
            num: 2,
            columns: [
              { num: 0, active: "none" },
              { num: 1, active: "none" },
              { num: 2, active: "none" }
            ]
          }
        ]
      };
      this.handlerClick = this.handlerClick.bind(this);
      this.response = this.response.bind(this);
      this.checkFields = this.checkFields.bind(this);
      this.checkElements = this.checkElements.bind(this);
      this.changeNull = this.changeNull.bind(this);
      this.checkFinish = this.checkFinish.bind(this);
    }
    checkElements(columns) {
      let option = ["none", "none", "none"];
      columns.forEach((el, idx) => {
        option[idx] = el.active;
      });
      return option;
    }

    changeNull(option) {
      let { fields } = this.state;
      let field, column;
      let flag = false;
      for (let j = 0; j < 3; j++) {
        if (flag) {
          break;
        } else {
          for (let i = 0; i < 3; i++) {
            if (fields[j].columns[i].active === "none") {
              fields[j].columns[i].active = "null";
              column = i;
              field = j;
              flag = true;
              break;
            }
          }
        }
      }

      this.setState({ fields }, () => {
        const isFinish = this.checkFinish("null", field, column);
        if (isFinish.finish) {
          alert("Вы проиграли");
        }
      });
    }

    checkFields(fields) {
      let option = [
        ["none", "none", "none"],
        ["none", "none", "none"],
        ["none", "none", "none"]
      ];
      fields.forEach((field, idx) => {
        option[idx] = this.checkElements(field.columns);
      });
      this.changeNull(option);
    }
    response() {
      let { fields } = this.state;
      this.checkFields(fields);
    }
    handlerClick(field, column) {
      let { fields } = this.state;
      if (fields[field].columns[column].active === "none") {
        fields[field].columns[column].active = "cross";
        this.setState({ fields }, () => {
          const isFinish = this.checkFinish("cross", field, column);
          if (isFinish.finish) {
            alert("Вы выйграли");
          } else {
            this.response();
          }
        });
      }
    }
    checkFinish(active, field, column) {
      let { fields } = this.state;
      const thisField = fields[field].columns;
      if (field === 0 && column === 0) {
        if (
          (thisField[1].active === active && thisField[2].active === active) ||
          (fields[1].columns[1].active === active &&
            fields[2].columns[2].active === active) ||
          (fields[1].columns[0].active === active &&
            fields[2].columns[0].active === active)
        ) {
          return { finish: true, active };
        } else {
          return { finish: false };
        }
      } else if (field === 0 && column === 1) {
        if (
          (thisField[0].active === active && thisField[2].active === active) ||
          (fields[1].columns[1].active === active &&
            fields[2].columns[1].active === active)
        ) {
          return { finish: true, active };
        } else {
          return { finish: false };
        }
      } else if (field === 0 && column === 2) {
        if (
          (thisField[1].active === active && thisField[0].active === active) ||
          (fields[1].columns[1].active === active &&
            fields[2].columns[0].active === active) ||
          (fields[1].columns[2].active === active &&
            fields[2].columns[2].active === active)
        ) {
          return { finish: true, active };
        } else {
          return { finish: false };
        }
      } else if (field === 1 && column === 0) {
        if (
          (thisField[1].active === active && thisField[2].active === active) ||
          (fields[0].columns[0].active === active &&
            fields[2].columns[0].active === active)
        ) {
          return { finish: true, active };
        } else {
          return { finish: false };
        }
      } else if (field === 1 && column === 1) {
        if (
          (thisField[0].active === active && thisField[2].active === active) ||
          (fields[0].columns[0].active === active &&
            fields[2].columns[2].active === active) ||
          (fields[2].columns[0].active === active &&
            fields[0].columns[2].active === active) ||
          (fields[0].columns[1].active === active &&
            fields[2].columns[1].active === active)
        ) {
          return { finish: true, active };
        } else {
          return { finish: false };
        }
      } else if (field === 1 && column === 2) {
        if (
          (thisField[0].active === active && thisField[1].active === active) ||
          (fields[0].columns[2].active === active &&
            fields[2].columns[2].active === active)
        ) {
          return { finish: true, active };
        } else {
          return { finish: false };
        }
      } else if (field === 2 && column === 0) {
        if (
          (thisField[1].active === active && thisField[2].active === active) ||
          (fields[0].columns[0].active === active &&
            fields[1].columns[0].active === active) ||
          (fields[1].columns[1].active === active &&
            fields[0].columns[2].active === active)
        ) {
          return { finish: true, active };
        } else {
          return { finish: false };
        }
      } else if (field === 2 && column === 1) {
        if (
          (thisField[0].active === active && thisField[2].active === active) ||
          (fields[0].columns[1].active === active &&
            fields[1].columns[1].active === active)
        ) {
          return { finish: true, active };
        } else {
          return { finish: false };
        }
      } else if (field === 2 && column === 2) {
        if (
          (thisField[1].active === active && thisField[0].active === active) ||
          (fields[0].columns[2].active === active &&
            fields[1].columns[2].active === active) ||
          (fields[1].columns[1].active === active &&
            fields[0].columns[0].active === active)
        ) {
          return { finish: true, active };
        } else {
          return { finish: false };
        }
      } else {
        return { finish: false };
      }
    }

    render() {
      const { fields } = this.state;
      return (
        <Component
          handlerClick={this.handlerClick}
          fields={fields}
          {...this.props}
        />
      );
    }
  }
  WithContainer.displayName = `WithContainer(${Component.displayName ||
    Component.name ||
    "Component"})`;
  return WithContainer;
};

export default withContainer;
