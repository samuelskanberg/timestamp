var data = [
  {date: "2015-07-01", hours: 8, timestamps: [{start: '09:00', end: '12:00'}, {start: '13:00', end: '16:00'} ]},
  {date: "2015-07-02", hours: 8, timestamps: [{start: '08:30', end: '12:00'}, {start: '13:00', end: '16:30'} ]}
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
        <Day date={day.date} hours={day.hours} timestamps={day.timestamps}></Day>
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
    var timestampNodes = this.props.timestamps.map(function (timestamp) {
      return (
        <Timestamp start={timestamp.start} end={timestamp.end}></Timestamp>
      );
    });
    return (
      <div className="day">
        <h2 className="dayDate">
          {this.props.date}
        </h2>
        <div className="dayTimestamps">
          {timestampNodes}
        </div>
        <h3 className="dayHours">
          {this.props.hours}
        </h3>
      </div>
    );
  }
});

var Timestamp = React.createClass({
  render: function() {
    return (
      <div className="timestamp">
        <ul>
          <li className="timestampStart">
            {this.props.start}
          </li>
          <li className="timestampEnd">
            {this.props.end}
          </li>
        </ul>
      </div>
    );
  }
});

React.render(
  <DayBox data={data} />,
  document.getElementById('content')
);
