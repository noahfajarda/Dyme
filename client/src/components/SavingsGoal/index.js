//var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
"use strict";
var placeholder = document.createElement("li");
placeholder.className = "placeholder";
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var OverlayTrigger = ReactBootstrap.OverlayTrigger;
class Pie extends React.Component {
  render() {
    const { color, width, progress } = this.props;
    const pi = 3.14159265359;
    const r = 400 / 2;
    const c = 2 * pi * r;
    const realProgress = c * progress;
    return /*#__PURE__*/ React.createElement(
      "div",
      { className: "svg-container" } /*#__PURE__*/,
      React.createElement(
        "div",
        {
          className: "svg-content",
        } /*#__PURE__*/,

        React.createElement(
          "svg",
          {
            viewBox: "0 0 500 500",
            preserveAspectRatio: "xMinYMin meet",
          } /*#__PURE__*/,

          React.createElement(
            "filter",
            { id: "shadow" } /*#__PURE__*/,
            React.createElement("feGaussianBlur", {
              in: "SourceGraphic",
              stdDeviation: "15",
            }) /*#__PURE__*/,
            React.createElement("feOffset", { dx: "-5", dy: "-4" })
          ) /*#__PURE__*/,

          React.createElement("circle", {
            className: "animated",
            cx: "250",
            cy: "250",
            r: "200",
            stroke: "",
            fillOpacity: "0",
            strokeWidth: width + 10,
            strokeDasharray: [realProgress, c],
            strokeDashoffset: c * progress,
          }) /*#__PURE__*/,

          React.createElement("circle", {
            filter: "url(#shadow)",
            className: "animated shadow",
            cx: "250",
            cy: "250",
            r: "200",
            stroke: color,
            fillOpacity: "0",
            strokeWidth: width,
            strokeDasharray: [realProgress, c],
            strokeDashoffset: c * progress,
          }) /*#__PURE__*/,

          React.createElement("circle", {
            className: "animated fill",
            cx: "250",
            cy: "250",
            r: "200",
            stroke: color,
            fillOpacity: "0",
            strokeWidth: width,
            strokeDasharray: [realProgress, c],
            strokeDashoffset: c * progress,
          }) /*#__PURE__*/,

          React.createElement("circle", {
            cx: "250",
            cy: "250",
            r: "200",
            stroke: color,
            fillOpacity: "0",
            strokeWidth: "5",
            strokeDasharray: [c, c],
            strokeOpacity: "0.1",
          })
        )
      )
    );
  }
}

class Application extends React.Component {
  render() {
    var percent = this.props.percent;
    var colorChart = this.props.colorChart;
    return /*#__PURE__*/ React.createElement(
      "div",
      null /*#__PURE__*/,
      React.createElement(
        "div",
        { className: "box" } /*#__PURE__*/,
        React.createElement(Pie, {
          color: colorChart,
          width: 15,
          progress: percent,
        })
      )
    );
  }
}

var progressUpdate;
var goals = [
  {
    category: "car",
    name: "Car",
    amount: 20000,
    progress: 6593,
    flipped: false,
    dragStatus: true,
  },
  {
    category: "plane",
    name: "Vacation",
    amount: 3500,
    progress: 2984,
    flipped: false,
    dragStatus: true,
  },
];

var dragStatus = true;

class GoalCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: false,
      progress: this.props.item.progress,
      input1: this.props.item.name,
      input2: this.props.item.amount,
      input3: this.props.item.progress,
      selectValue: this.props.item.category,
    };
  }
  addMoney() {
    var addFunds = prompt("Add funds for: " + this.props.item.name, "0");
    this.props.item.progress += Number(addFunds);
    this.setState({
      item: this.props.item,
    });
  }
  onSave() {
    this.props.item.progress = progressUpdate;
    this.setState({
      item: this.props.item,
    });
  }
  editGoal(index) {
    this.props.onFlip(index);
    this.setState({
      condition: !this.state.condition,
      input1: this.props.item.name,
      input2: this.props.item.amount,
      input3: this.props.item.progress,
      selectValue: this.props.item.category,
    });
  }
  deleteGoal(index) {
    this.props.onDelete(index);
    this.setState({
      condition: !this.state.condition,
      input1: this.props.item.name,
      input2: this.props.item.amount,
      input3: this.props.item.progress,
      selectValue: this.props.item.category,
      flipped: false,
      dragStatus: true,
    });
  }
  cancelEdit(index) {
    this.props.onFlip(index);
    this.setState({
      condition: !this.state.condition,
      input1: this.props.item.name,
      input2: this.props.item.amount,
      input3: this.props.item.progress,
      selectValue: this.props.item.category,
    });
  }
  saveGoal(index) {
    this.props.onFlip(index);
    this.setState({ condition: !this.state.condition });
    this.props.item.name = this.state.input1;
    this.props.item.amount = Number(this.state.input2);
    this.props.item.progress = Number(this.state.input3);
    this.props.item.category = this.state.selectValue;
  }
  handleChange(name, e) {
    var change = {};
    change[name] = e.target.value;
    this.setState(change);
  }
  handleDropdown(e) {
    this.setState({ selectValue: e.target.value });
  }

  render() {
    var message;
    var strokeColor;
    var status;
    var remaining;
    var percentRemaining;
    if (this.props.item.progress / this.props.item.amount < 1) {
      strokeColor = "#01579B";
      status = "Remaining";
      remaining = (
        this.props.item.amount - this.props.item.progress
      ).toLocaleString();
      percentRemaining =
        "(" +
        (
          ((this.props.item.amount - this.props.item.progress) /
            this.props.item.amount) *
          100
        ).toFixed(0) +
        "%)";
    } else {
      strokeColor = "#7dbf69";
      status = "Exceeded";
      remaining = Math.abs(
        this.props.item.amount - this.props.item.progress
      ).toLocaleString();
      percentRemaining =
        "(" +
        Math.abs(
          ((this.props.item.amount - this.props.item.progress) /
            this.props.item.amount) *
            100
        ).toFixed(0) +
        "%)";
    }

    return /*#__PURE__*/ React.createElement(
      "div",
      {
        className: this.state.condition
          ? "flipped card-container"
          : "card-container",
      } /*#__PURE__*/,

      React.createElement(
        "figure",
        { className: "front" } /*#__PURE__*/,
        React.createElement(
          "div",
          { className: "goal--top" } /*#__PURE__*/,
          React.createElement(
            "a",
            {
              href: "#",
              className: "edit",
              onClick: this.editGoal.bind(this, this.props.item.index),
            },
            /*#__PURE__*/ React.createElement("i", {
              className: "fa fa-pencil-square-o",
            })
          ) /*#__PURE__*/,
          React.createElement(
            "div",
            { className: "goal__name" },
            this.props.item.name
          ) /*#__PURE__*/,
          React.createElement(Application, {
            percent: this.props.item.progress / this.props.item.amount,
            colorChart: strokeColor,
          }) /*#__PURE__*/,
          React.createElement(
            "div",
            { className: "goal--top__container" } /*#__PURE__*/,
            React.createElement("i", {
              className: "category fa fa-" + this.props.item.category,
              "aria-hidden": "true",
            }) /*#__PURE__*/,
            React.createElement(
              "div",
              { className: "goal--progress" },
              /*#__PURE__*/ React.createElement(
                "span",
                { className: "money" },
                this.props.item.progress.toLocaleString()
              )
            ) /*#__PURE__*/,

            React.createElement(
              "div",
              { className: "goal--amount" },
              "of ",
              /*#__PURE__*/ React.createElement(
                "span",
                { className: "money" },
                this.props.item.amount.toLocaleString()
              )
            )
          )
        ) /*#__PURE__*/,

        React.createElement(
          "div",
          { className: "goal--bottom" } /*#__PURE__*/,
          React.createElement(
            "div",
            { className: "descriptor" },
            status /*#__PURE__*/,
            React.createElement(
              "span",
              { className: "money right goal--remain" },
              remaining
            ) /*#__PURE__*/,
            React.createElement(
              "span",
              { className: "percent right" },
              percentRemaining
            )
          ) /*#__PURE__*/,

          React.createElement(Example, {
            name: this.props.item.name,
            progress: this.props.item.progress,
            amount: this.props.item.amount,
            onSave: this.onSave.bind(this),
          })
        )
      ) /*#__PURE__*/,

      React.createElement(
        "figure",
        { className: "back" } /*#__PURE__*/,

        React.createElement(
          "a",
          {
            href: "#",
            className: "back-arrow",
            onClick: this.cancelEdit.bind(this, this.props.item.index),
          },
          /*#__PURE__*/ React.createElement("i", {
            className: "fa fa-angle-left",
          })
        ) /*#__PURE__*/,
        React.createElement(
          "h3",
          { className: "card-title" },
          "Goal Details"
        ) /*#__PURE__*/,
        React.createElement(
          "div",
          { className: "input-container" } /*#__PURE__*/,
          React.createElement(
            "label",
            { name: "name", className: "descriptor" },
            "Name"
          ) /*#__PURE__*/,
          React.createElement("input", {
            type: "text",
            placeholder: "Goal Name",
            value: this.state.input1,
            onChange: this.handleChange.bind(this, "input1"),
          }) /*#__PURE__*/,
          React.createElement(
            "label",
            { name: "amount", className: "descriptor" },
            "Goal"
          ) /*#__PURE__*/,
          React.createElement("span", { className: "edit-money" }, "$"),
          /*#__PURE__*/ React.createElement("input", {
            type: "number",
            placeholder: "Amount",
            value: this.state.input2,
            onChange: this.handleChange.bind(this, "input2"),
          }) /*#__PURE__*/,
          React.createElement(
            "label",
            { name: "progress", className: "descriptor" },
            "Progress"
          ) /*#__PURE__*/,
          React.createElement("span", { className: "edit-money" }, "$"),
          " ",
          /*#__PURE__*/ React.createElement("input", {
            type: "number",
            placeholder: "Progress",
            value: this.state.input3,
            onChange: this.handleChange.bind(this, "input3"),
          }),
          "         ",
          /*#__PURE__*/ React.createElement(
            "label",
            { name: "icon", className: "descriptor" },
            "Icon"
          ) /*#__PURE__*/,
          React.createElement(
            "div",
            { className: "dropdown-wrapper" } /*#__PURE__*/,
            React.createElement(
              "select",
              {
                value: this.state.selectValue,
                onChange: this.handleDropdown.bind(this),
              } /*#__PURE__*/,

              React.createElement(
                "option",
                { value: "car" },
                "Car"
              ) /*#__PURE__*/,
              React.createElement(
                "option",
                { value: "plane" },
                "Plane"
              ) /*#__PURE__*/,
              React.createElement("option", { value: "" }, "None")
            )
          )
        ) /*#__PURE__*/,

        React.createElement("input", {
          type: "button",
          className: "button",
          value: "Save Changes",
          onClick: this.saveGoal.bind(this, this.props.item.index),
        }) /*#__PURE__*/,
        React.createElement(
          "a",
          {
            href: "#",
            className: "delete",
            onClick: this.deleteGoal.bind(this, this.props.item.index),
          },
          "Delete Goal"
        )
      )
    );
  }
}

const Example = React.createClass({
  displayName: "Example",
  getInitialState() {
    return {
      showModal: false,
      progress: this.props.progress,
      input1: "",
      sum: "",
    };
  },

  close() {
    this.setState({ showModal: false });
  },
  submit(e) {
    if (e.key === "Enter") {
      progressUpdate = this.state.sum;
      this.props.onSave();
      this.setState({
        showModal: false,
      });
    }
  },
  save() {
    progressUpdate = this.state.sum;
    this.props.onSave();
    this.setState({
      showModal: false,
    });
  },
  open() {
    this.setState({ showModal: true, sum: this.props.progress, input1: "" });
  },
  handleChange(name, e) {
    var change = {};
    change[name] = e.target.value;

    this.setState(change);
    this.setState({
      sum: Number(this.props.progress) + Number(change[name]),
    });
  },

  render() {
    return /*#__PURE__*/ React.createElement(
      "div",
      null /*#__PURE__*/,

      React.createElement(
        Button,
        {
          bsStyle: "primary",
          bsSize: "large",
          onClick: this.open,
          className: "button",
        },
        "Add funds"
      ) /*#__PURE__*/,

      React.createElement(
        Modal,
        { show: this.state.showModal, onHide: this.close } /*#__PURE__*/,
        React.createElement(
          Modal.Header,
          { closeButton: true } /*#__PURE__*/,
          React.createElement(
            Modal.Title,
            null,
            "Add Funds for ",
            this.props.name
          )
        ) /*#__PURE__*/,

        React.createElement(
          Modal.Body,
          null /*#__PURE__*/,
          React.createElement("label", null, "Current progress:") /*#__PURE__*/,
          React.createElement(
            "div",
            { className: "data" },
            "$",
            this.props.progress.toLocaleString()
          ) /*#__PURE__*/,
          React.createElement("label", null, "Add amount:") /*#__PURE__*/,
          React.createElement(
            "div",
            { className: "data" } /*#__PURE__*/,
            React.createElement("span", { className: "pre-money" }, "$"),
            " ",
            /*#__PURE__*/ React.createElement("input", {
              type: "number",
              className: "fund-container",
              defaultValue: "",
              onKeyPress: this.submit.bind(this),
              onChange: this.handleChange.bind(this, "input1"),
              autoFocus: true,
            })
          ) /*#__PURE__*/,
          React.createElement(
            "p",
            { className: "smallprint" },
            " Total Progress: ",
            /*#__PURE__*/ React.createElement(
              "span",
              { className: "pre-money" },
              "$"
            ),
            this.state.sum.toLocaleString()
          )
        ) /*#__PURE__*/,

        React.createElement(
          Modal.Footer,
          null /*#__PURE__*/,
          React.createElement(
            Button,
            { onClick: this.close },
            "Close"
          ) /*#__PURE__*/,
          React.createElement(
            Button,
            {
              type: "button",
              className: "btn-primary",
              onClick: this.save.bind(this, this.props),
            },
            "Update Progress"
          )
        )
      )
    );
  },
});

var GoalList = React.createClass({
  displayName: "GoalList",
  getInitialState: function () {
    return {
      data: this.props.data,
    };
  },
  dragStart: function (e) {
    //this.refs['update'].updateGoal();
    this.dragged = e.currentTarget;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.currentTarget);
  },
  dragEnd: function (e) {
    this.dragged.style.display = "block";
    placeholder.remove();
    // Update data
    var data = this.state.data;
    var from = Number(this.dragged.dataset.id);
    var to = Number(this.over.dataset.id);
    if (from < to) to--;
    if (this.nodePlacement == "after") to++;
    data.splice(to, 0, data.splice(from, 1)[0]);
    this.setState({
      data: data,
    });
  },
  dragOver: function (e) {
    e.preventDefault();
    this.dragged.style.display = "none";
    if (e.target.className == "placeholder") return;
    this.over = e.target;
    // Inside the dragOver method
    var relY = e.pageY - this.over.offsetTop;
    var height = this.over.offsetHeight / 2;
    var relX = e.pageX - this.over.offsetLeft;
    var width = this.over.offsetWidth / 2;
    var parent = e.target.parentNode;

    if (relX >= width) {
      this.nodePlacement = "after";
      parent.insertBefore(placeholder, e.target.nextElementSibling);
    } else {
      this.nodePlacement = "before";
      parent.insertBefore(placeholder, e.target);
    }
    this.setState({
      data: this.props.data,
    });
  },
  onFlip: function (i) {
    var data = this.state.data;
    data[i].flipped = !data[i].flipped;

    this.setState({
      data: data,
    });

    if (data[i].flipped) {
      var data = this.props.data;
      //	data[i].dragStatus = false;
      dragStatus = false;
    } else {
      //	data[i].dragStatus= true;
      dragStatus = true;
    }
  },
  onDelete: function (i) {
    var data = this.props.data;
    var newData = this.state.data.slice(); //copy array
    newData.splice(i, 1); //remove element
    this.setState({ data: newData }); //update state
    this.props = newData;
    //var data = this.props.data;
    data[i].flipped = !data[i].flipped;
    if (data[i].flipped) {
      //	data[i].dragStatus = false;
      dragStatus = false;
    } else {
      //	data[i].dragStatus= true;
      dragStatus = true;
    }
    data = newData;
    //data.splice(i, 1);

    //	this.setState({ data: data});
  },
  render: function () {
    return /*#__PURE__*/ React.createElement(
      "ul",
      { className: "goal__list", onDragOver: this.dragOver },

      this.state.data.map(function (item, i) {
        return /*#__PURE__*/ React.createElement(
          "li",
          {
            "data-id": i,
            key: i,
            // draggable={goals[i].dragStatus}
            draggable: dragStatus,
            onDragEnd: this.dragEnd.bind(this),
            onDragStart: this.dragStart.bind(this),
          } /*#__PURE__*/,

          React.createElement(GoalCard, {
            item: item,
            onFlip: this.onFlip.bind(this, i),
            cancelEdit: this.onFlip.bind(this, i),
            saveGoal: this.onFlip.bind(this, i),
            onDelete: this.onDelete.bind(this, i),
          })
        );
      }, this)
    );
  },
});

ReactDOM.render(
  /*#__PURE__*/ React.createElement(GoalList, { data: goals }),
  document.getElementById("app")
);
