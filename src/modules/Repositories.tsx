import Form from "./Form";
// import repos from "./../data/repos.json";
import { useReposQuery } from "../services/github";
import { ChangeEvent, useState } from "react";
import Repository from "./Repository";
import { RiCloseFill } from "react-icons/ri";

const filters = {
    types: [
        { value: "type", label: "Type" },
        { value: "all", label: "All" },
        { value: "public", label: "Public" },
        { value: "private", label: "Private" },
        // { value: "sources", label: "Sources" },
        { value: "fork", label: "Forks" },
        { value: "archived", label: "Archived" },
        { value: "mirror_url", label: "Mirrors" },
        { value: "is_template", label: "Templates" },
    ],
    languages: [
        { value: "language", label: "Language" },
        { value: "All", label: "All" },
        { value: "Javascript", label: "Javascript" },
        { value: "TypeScript", label: "TypeScript" },
        { value: "HTML", label: "HTML" },
        { value: "CSS", label: "CSS" },
    ],
    sort: [
        { value: "sort", label: "Sort" },
        { value: "last updated", label: "Last Updated" },
        { value: "name", label: "Name" },
        { value: "stars", label: "Stars" },
    ],
};

const Repositories = () => {
    const { isError, isLoading, data } = useReposQuery();

    let repositories = [];

    const [searchedRepo, setSearchedRepo] = useState("");

    const filterOptions = { ...filters };

    const [selectedFilter, setSelectedFilter] = useState({
        type: "Type",
        language: "Language",
        sort: "last updated",
    });

    if (isLoading) return <div>Loading....</div>;

    if (isError) return <div>There was an Error...</div>;

    repositories = [...data!];

    const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;

        setSelectedFilter((prev) => ({ ...prev, [name]: value }));
    };

    const clearFilter = () => {
        setSearchedRepo("");
        setSelectedFilter({
            type: "Type",
            language: "Language",
            sort: "last updated",
        });
    };

    const type = selectedFilter.type.toLowerCase();
    const sort = selectedFilter.sort.toLowerCase();
    const language = selectedFilter.language.toLowerCase();

    if (searchedRepo) {
        repositories = repositories.filter((repo) =>
            repo.name.toLowerCase().includes(searchedRepo.toLowerCase())
        );
    }

    if (type !== "type" && type !== "all") {
        if (type === "public") {
            repositories = repositories.filter(
                (repo) => repo.private === false
            );
        } else if (
            type === "private" ||
            type === "fork" ||
            type === "archived" ||
            type === "mirror_url" ||
            type === "is_template"
        ) {
            repositories = repositories.filter((repo) => repo[type]);
        }
    }

    if (language !== "language" && language !== "all") {
        repositories = repositories.filter(
            (repo) => repo.language?.toLocaleLowerCase() === language
        );
    }

    if (sort !== "sort") {
        if (sort === "stars") {
            repositories = repositories.sort(
                (a, b) => b.stargazers_count - a.stargazers_count
            );
        } else if (sort === "name") {
            repositories = repositories.sort((a, b) =>
                a.name.localeCompare(b.name)
            );
        } else if (sort === "last updated") {
            repositories = repositories.sort((a, b) =>
                b.updated_at.localeCompare(a.updated_at)
            );
        }
    }

    const showResultText =
        (type === "type" || type === "all") &&
        (language === "language" || language === "all")
            ? false
            : true;

    return (
        <section className="profile__repos">
            <Form
                filterOptions={filterOptions}
                handleFilterChange={handleFilterChange}
                searchedRepo={searchedRepo}
                setSearchedRepo={setSearchedRepo}
            />
            {showResultText && (
                <div className="profile__repos--result flex">
                    <p>
                        <span>{repositories.length}</span> results for{" "}
                        <span>
                            {type === "fork"
                                ? "forked"
                                : type === "mirror_url"
                                ? "mirror"
                                : type === "is_template"
                                ? "template"
                                : type === "all" || type === "type"
                                ? ""
                                : type}
                        </span>{" "}
                        repositories{" "}
                        {language !== "language" && language !== "all" ? (
                            <>
                                written in <span>{language}</span>
                            </>
                        ) : (
                            ""
                        )}{" "}
                        sorted by <span>{sort}</span>
                    </p>
                    <button
                        type="button"
                        onClick={clearFilter}
                        className="flex"
                    >
                        <span className="flex">
                            <RiCloseFill />
                        </span>
                        Clear filter
                    </button>
                </div>
            )}
            {repositories.length === 0 ? (
                <p className="profile__repos--empty">
                    Olaleye-Blessing doesn’t have any repositories that match.
                </p>
            ) : (
                <ul>
                    {repositories.map((repo) => (
                        <Repository key={repo.node_id} {...repo} />
                    ))}
                </ul>
            )}
        </section>
    );
};

export default Repositories;
