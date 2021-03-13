const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://paulogrillo.com.br'
}

import { RepositoryItem } from "./RepositoryItem"

export function RepositoryList(){
    return(
        <section className="respository-list">
            <h1>Lista de repositórios</h1>
        <ul>
           <RepositoryItem repository={repository} />
           <RepositoryItem repository={repository}/>

           <RepositoryItem repository={repository}/>
           <RepositoryItem repository={repository}/>
        </ul>

        </section>
    );
}