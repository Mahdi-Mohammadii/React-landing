export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>مشاوره های مدیریتی</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-md-4">
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
