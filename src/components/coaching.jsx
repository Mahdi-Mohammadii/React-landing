export const Coaching = (props) => {
  return (
    <div id="coaching" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>مربیگری مدیریتی</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-md">
                  {" "}
                  <a href="#contact">
                    {" "}
                    <img src={d.img} alt={d.alt} />
                    <div className="feature-desc">
                      <h3>{d.title}</h3>
                      <p>{d.text}</p>
                    </div>
                  </a>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
