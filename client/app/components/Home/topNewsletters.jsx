import React from 'react';
import 'whatwg-fetch';
import { Route, Redirect } from 'react-router';

export default class TopNewsletters extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newsletters:[]
        }
    }  

    topNewsletters() {
        const {
          newsletters:[],
        } = this.state;
        let i = 0;
    
        fetch('/api/home/newsletters')
          .then(res => res.json())
          .then(json => {
            this.setState({
              newsletters: json,
            });
          });
        return (
          <div>
            {this.state.newsletters.map((newsletter, i) => (
              <div className="newsletter-box" key={i}>
                <h3>{newsletter.title}</h3>
                <span>{newsletter.description} </span>
                <span>{newsletter.date} </span>
              </div>
            ))}
          </div>
        )    
      }

      render() {
        const {
            newsletters
        } = this.props;
        return(
            this.topNewsletters()
        )
    }
        
};