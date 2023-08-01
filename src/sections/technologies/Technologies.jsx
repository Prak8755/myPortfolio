import Card from '../../components/Card'
import data from './data'
import './technlogies.css';

const Technologies = () => {
  return (
    <section id="services">
      <h2>Certification</h2>
      <p>Time to show some skills </p>
      <div className="container services__container" data-aos="fade-up">
        {
          data.map(item => (
            <Card key={item.id} className="service light">
              <div className="service__icon">{item.icon}</div>
              <div className="service__details">
                <h4>{item.title}</h4>
                  <p>{item.desc}</p>
              </div>
            </Card>
          ))
        }
      </div>
    </section>
  )
}

export default Technologies