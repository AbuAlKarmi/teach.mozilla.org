var React = require('react');
var Illustration = require('../components/illustration.jsx');

var ActivitySection = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    activities: React.PropTypes.array.isRequired
  },
  render: function () {
    console.log("this.props.title", this.props.title);
    return (
      <section className="activity-section">
        <h2>
          Section {this.props.title}
        </h2>
        {this.props.activities.map(function (activity, i) {
          return (
            <div className="activity" key={i}>
              <Illustration height={122} width={122}
              src1x={activity.image1x}
              src2x={activity.image2x}
              alt=""
              link={activity.link}>
                <div className="curriculum-description">
                  <a href={activity.link}>
                    <h3>{activity.title}</h3>
                  </a>
                  <p>
                    <em>{activity.subtitle}</em>
                  </p>
                  <p className="description" dangerouslySetInnerHTML={{__html: activity.description}}></p>
                </div>
              </Illustration>
            </div>
          )
        })}
      </section>
    );
  }
});

module.exports = ActivitySection;
