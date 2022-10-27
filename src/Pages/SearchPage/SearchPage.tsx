import React, { useState, useEffect } from "react";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import styles from './index.module.scss';
import SearchItem from "./SearchItem/SearchItem";

interface ISearchPage {
    list: string;
}

const SearchPage = (props: ISearchPage) => {

    const {} = props;

    const [suggestions, setSuggestions] = useState([]);
    const [searchText, setSearchText] = useState('');

    const [query, setQuery] = useState(searchText);

    let url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
    let token = "3b31a3c0085ca9eb47711d572c15ea2286168a17";

    const handleSubmit = () => {
        if (query.length > 3) {
            let options = {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": "Token " + token
                },
                body: JSON.stringify({
                    query: query
                })
            }
            fetch(url, options)
                .then((res) => {
                    return res.json();
                })
                .then((obj) => {
                    setSuggestions(obj.suggestions);
                })
                .catch(error => console.log("error", error));
        }
    };

    useEffect(() => {
        setSuggestions(suggestions)
    }, [suggestions])

    return (
        <div className={styles.searchpage_wrapper}>
            <div className={styles.searchpage_header}>
                <h2 className={styles.title}>Поиск адресов</h2>
                <p className={styles.subtitle}>Введите интересующий вас адрес</p>
            </div>
            <div className={styles.content}>
                <div className={styles.search_input}>
                    <Input placeholder="Введите интересующий вас адрес" enterPress={handleSubmit} type="text" value={query} handler={setQuery} />
                    <Button name="searchw" handler={handleSubmit} value={"Поиск"} />
                </div>
                <div className={styles.item_list}>
                    <p className={styles.list_title}>Адреса</p>
                    <div>
                        {suggestions.map((item) => (
                            <SearchItem key={item.value} value={item.value} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchPage;