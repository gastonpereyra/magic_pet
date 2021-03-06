import React, {useState} from 'react';

const comentarios = [
    {
        name: "Gaston1",
        message: "Tremenda Atención, todo de 10 como siempre, gracias por tanto perdón por tan poco. Tremenda Atención, todo de 10 como siempre, gracias por tanto perdón por tan poco. Tremenda Atención, todo de 10 como siempre, gracias por tanto perdón por tan poco. Tremenda Atención, todo de 10 a",
        link: "https://www.twitter.com/"
    },
    {
        name: "Gaston2",
        message: "Tremenda Atención, todo de 10 como siempre, gracias por tanto perdón por tan poco. Tremenda Atención, todo de 10 como siempre, gracias por tanto perdón por tan poco. Tremenda Atención, todo de 10 como siempre, gracias por tanto perdón por tan poco. Tremenda Atención, todo de 10 a",
        link: "https://www.instagram.com/"
    },
    {
        name: "Gaston3",
        message: "Tremenda Atención, todo de 10 como siempre, gracias por tanto perdón por tan poco",
        link: "https://www.twitter.com/"
    },
    {
        name: "Gaston4",
        message: "Tremenda Atención, todo de 10 como siempre, gracias por tanto perdón por tan poco. Tremenda Atención, todo de 10 como siempre, gracias por tanto perdón por tan poco. Tremenda Atención, todo de 10 como siempre, gracias por tanto perdón por tan poco. Tremenda Atención, todo de 10 a",
        link: "https://www.twwitter.com/"
    },
    {
        name: "Gaston5",
        message: "Tremenda Atención, todo de 10 como siempre, gracias por tanto perdón por tan poco",
        link: "https://www.reddit.com/"
    },
    {
        name: "Gaston6",
        message: "Tremenda Atención, todo de 10 como siempre, gracias por tanto perdón por tan poco"
    },
    {
        name: "Gaston7",
        message: "Tremenda Atención, todo de 10 como siempre, gracias por tanto perdón por tan poco",
        link: "https://www.facebook.com/"
    },
    {
        name: "Gaston8",
        message: "Tremenda Atención, todo de 10 como siempre, gracias por tanto perdón por tan poco",
        link: "https://www.twitter.com/"
    }
];

const Comment = ({name='Anonymus',message='',link=''}) => {

    const message_color = (url='') => { 
        if (url.includes('twitter')) 
            return 'message is-light';
        else if (url.includes('facebook'))
            return 'message is-link';
        else if (url.includes('instagram'))
            return 'message is-primary';
        else if (url.includes('reddit'))
            return 'message is-danger'
        else
            return 'message is-dark';
    };

    const message_link = (url='') => {
        if (url.includes('twitter')) 
            return 'fab fa-twitter has-text-info';
        else if (url.includes('facebook'))
            return 'fab fa-facebook has-text-link';
        else if (url.includes('instagram'))
            return 'fab fa-instagram has-text-primary';
        else if (url.includes('reddit'))
            return 'fab fa-reddit has-text-danger'
        else
            return 'fas fa-link';
    };

    return (
        <article className={message_color(link)}>
            <div className="message-header">
                <span>{`${name} :`}</span>
                {link && <a className="button is-small is-white is-rounded is-inverted" href={link}>
                    <span className="icon">
                        <i className={message_link(link)}></i>
                    </span>
                </a>}
            </div>
            <div className="message-body is-240">
                {message}
            </div>
        </article>
    )
}

const Pagination = ({count, max, actual, changePage, children}) => {

    return (
        <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                <button className="pagination-previous button is-rounded is-warning" onClick={() => changePage( actual>0 ? actual-count : max-1)}>
                    <span className="icon">
                        <i className="fas fa-chevron-circle-left "></i>
                    </span>
                </button>
                <button className="pagination-next button is-rounded is-warning" onClick={() => changePage(actual+count < max ? actual+count : 0)}>
                    <span className="icon">
                        <i className="fas fa-chevron-circle-right "></i>
                    </span>
                </button>
                <ul className="pagination-list columns">
                    <div className="column is-two-third">
                        {children}
                    </div>
                    
                </ul>
            </nav>
    )
}

const Comments = () => {

    const count = 1
    const [page, setPage] = useState(0);
    
    let $comentarios = comentarios.map((c,i) => (
        <li key={i}>
            <Comment name={c.name} message={c.message} link={c.link ? c.link : ''} />
        </li>
    ))

    return (
      <section className="section has-background-info" id="Comments">
        
          <div className="container">
            <h2 className="title has-text-centered">
              Comentarios
            </h2>
            <Pagination count={count} max={comentarios.length} actual={page} changePage={setPage}>
                {$comentarios.filter((c,i) => i<(count+page) && (0+page)<=i)}
            </Pagination>
          </div>
        
      </section>
    )
}

export default Comments;