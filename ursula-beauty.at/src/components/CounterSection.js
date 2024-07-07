import Counter from "./Counter";
const CounterSection = () => {
  return (
    <div className="counter-section text-white bg-yellow pt-60 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="counter-item wow fadeInUp delay-0-2s">
              <Counter end={6203} />
              <p>project complete</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="counter-item wow fadeInUp delay-0-4s">
              <span className="count-text" data-speed={5000} data-stop={456}>
                <Counter end={456} />
              </span>
              <p>Expert Members</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="counter-item wow fadeInUp delay-0-6s">
              <span className="count-text" data-speed={5000} data-stop={35}>
                <Counter end={35} />
              </span>
              <p>Years Experience</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="counter-item wow fadeInUp delay-0-8s">
              <span className="count-text" data-speed={5000} data-stop={7563}>
                <Counter end={7563} />
              </span>
              <p>Saticfied Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CounterSection;
