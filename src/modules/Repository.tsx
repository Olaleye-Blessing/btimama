import { FC } from "react";
import { StyledRepo } from "./styles";
import { AiOutlineStar } from "react-icons/ai";
import { VscRepoForked } from "react-icons/vsc";
import { GiWeightLiftingUp } from "react-icons/gi";
import Select from "../components/Select/Index";
import { formatDate } from "../utility/formatDate";

export interface IRepo {
    node_id: string;
    name: string;
    html_url: string;
    description: string | null;
    language: string | null;
    updated_at: string;
    forks: number;
    license: null | { name: string };
    stargazers_count: number;
    visibility: string;
    private: boolean;
    fork: boolean;
    archived: boolean;
    mirror_url: null | string;
    is_template: boolean;
}

const Repository: FC<IRepo> = (props) => {
    return (
        <StyledRepo className="flex">
            <div className="repo__side--1">
                <h3 className="flex repo__head">
                    <a
                        href={props.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="repo__link"
                    >
                        {props.name}
                    </a>
                    <span className="repo__visibility">{props.visibility}</span>
                </h3>
                {props.description && (
                    <p className="repo__description">{props.description}</p>
                )}
                <div className="flex repo__info">
                    {props.language && (
                        <p className="repo__language">{props.language}</p>
                    )}
                    {props.stargazers_count > 0 && (
                        <p className="flex repo__starred">
                            <span className="flex">
                                <AiOutlineStar />
                            </span>
                            {props.stargazers_count}
                        </p>
                    )}
                    {props.forks > 0 && (
                        <p className="flex repo__fork">
                            <span className="flex">
                                <VscRepoForked />
                            </span>
                            {props.forks}
                        </p>
                    )}
                    {props.license && (
                        <p className="repo__lincense flex">
                            <span className="flex">
                                <GiWeightLiftingUp />
                            </span>
                            {props.license.name}
                        </p>
                    )}
                    {props.updated_at && (
                        <p className="repo__updated">
                            Updated on {formatDate(new Date(props.updated_at))}
                        </p>
                    )}
                </div>
            </div>
            <div className="flex repo__star--cont">
                <button className="flex">
                    <span className="flex">
                        <AiOutlineStar />
                    </span>
                    Star
                </button>
                <Select
                    id="star"
                    name="star"
                    onChange={(e) => {}}
                    options={[]}
                    value=""
                />
            </div>
        </StyledRepo>
    );
};

export default Repository;
