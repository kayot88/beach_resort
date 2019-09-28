import React, { Component } from 'react';
import { FaCocktail, FaBeer, FaHiking, FaShuttleVan } from 'react-icons/fa';
import Title from './Title';
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        titles: 'free cocktails',
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, minus?'
      },
      {
        icon: <FaBeer />,
        titles: 'strongest beer',
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, minus?'
      },
      {
        icon: <FaHiking />,
        titles: 'best hikis',
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, minus?'
      },
      {
        icon: <FaShuttleVan />,
        titles: 'shuttle',
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, minus?'
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" className="services-header" />
        <div className="services-center">
          {this.state.services.map((item, i) => {
            return (
              <article key={i} className="services-service">
                <span>{item.icon}</span>
                <h6 className="services-titles" title={item.titles}>{item.titles}</h6>
                <p className="services-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consequatur, praesentium!
                </p>
              </article>
            );
          }
          )}
        </div>
      </section>
    );
  }
}
