import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem"

//https://api.github.com/users/paulogrillo/repos

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList(){
    const [
        repositories, 
        setRespositories] = 
        useState<Repository[]>
        ([]);
    
    useEffect(() => {
        fetch('https://api.github.com/users/paulogrillo/repos')
        .then(response => response.json())
        .then(data => setRespositories(data))
    }, []);

    return(
        <section className="respository-list">
            <h1>Lista de repositórios</h1>
            <ul>
            {repositories.map(repository => {
                return<RepositoryItem 
                key={repository.name} 
                repository={repository} 
                />
            })};
            </ul>
        </section>
    );
}