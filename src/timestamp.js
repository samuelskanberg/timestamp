var data = [
  {date: "2015-07-01", hours: 8},
  {date: "2015-07-02", hours: 8}
];

var DayBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.setState(data);
  },
  render: function() {
    var dayNodes = this.props.data.map(function (day) {
      return (
        <Day date={day.date} hours={day.hours}></Day>
      );
    });
    return (
      <div className="dayBox">
        <h1>Days</h1>
        {dayNodes}
      </div>
    );
  }
});
var Day = React.createClass({
  render: function() {
    return (
      <div className="day">
        <h2 className="dayDate">
          {this.props.date}
        </h2>
        <h3 className="dayHours">
          {this.props.hours}
        </h3>
      </div>
    );
  }
});

React.render(
  <DayBox data={data} />,
  document.getElementById('content')
);
