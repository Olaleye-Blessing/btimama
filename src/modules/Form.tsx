import { ChangeEvent, FC } from "react";
import Select from "../components/Select/Index";
import { RiGitRepositoryCommitsLine } from "react-icons/ri";
import { StyledForm } from "./styles";

interface IRepoForm {
    searchedRepo: string;
    setSearchedRepo: (searchedRepo: string) => void;
    filterOptions: {
        types: { value: string; label: string }[];
        languages: { value: string; label: string }[];
        sort: { value: string; label: string }[];
    };
    handleFilterChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Form: FC<IRepoForm> = ({
    searchedRepo,
    filterOptions,
    setSearchedRepo,
    handleFilterChange,
}) => {
    return (
        <StyledForm onSubmit={(e) => e.preventDefault()} className="flex">
            <div className="flex form__filter--cont form__filter--main">
                <div className="form__filter--search">
                    <input
                        type="search"
                        name="search"
                        id="search"
                        value={searchedRepo}
                        onChange={(e) => setSearchedRepo(e.target.value)}
                        aria-label="Find a repository..."
                        placeholder="Find a repository..."
                    />
                </div>
                <div className="flex form__filter--cont">
                    <Select
                        id="type"
                        name="type"
                        options={filterOptions.types}
                        value="Type"
                        onChange={handleFilterChange}
                        others={{ "aria-label": "Filter repositories by type" }}
                    />
                    <Select
                        id="language"
                        name="language"
                        options={filterOptions.languages}
                        value="Language"
                        onChange={handleFilterChange}
                        others={{
                            "aria-label": "Filter repositories by Language",
                        }}
                    />
                    <Select
                        id="sort"
                        name="sort"
                        options={filterOptions.sort}
                        value="Sort"
                        onChange={handleFilterChange}
                        others={{ "aria-label": "Sort Repositories" }}
                    />
                </div>
            </div>
            <div className="form__repo--new">
                <button className="flex">
                    <span className="flex">
                        <RiGitRepositoryCommitsLine />
                    </span>
                    New
                </button>
            </div>
        </StyledForm>
    );
};

export default Form;
