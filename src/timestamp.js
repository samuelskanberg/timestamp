var data = [
  {date: "2015-07-01", timestamps: [{start: '09:00', end: '12:00'}, {start: '13:00', end: '16:00'} ]},
  {date: "2015-07-02", timestamps: [{start: '08:30', end: '12:00'}, {start: '13:00', end: '16:20'} ]}
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
var timeDiff = function(startTime, endTime) {
  var date = "1970-01-01";
  var startDate = new Date(date+'T'+startTime);
  var endDate = new Date(date+'T'+endTime);
  var diffSeconds = (endDate-startDate)/1000;
  return diffSeconds;
}
var secondsToTime = function(seconds) {
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60)) / 60;
  return hours+":"+minutes;
};
var timestampHours = function(timestamps, timestampDate) {
  var seconds = 0;
  var date = new Date(timestampDate);
  for (var i = 0; i < timestamps.length; i++) {
    var diffSeconds = timeDiff(timestamps[i].start, timestamps[i].end);
    seconds += diffSeconds;
  }
  return secondsToTime(seconds);
};
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
          {timestampHours(this.props.timestamps, this.props.date)}
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
          <li className="timestampDiff">
            <b>
            {secondsToTime(timeDiff(this.props.start, this.props.end))}
            </b>
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
