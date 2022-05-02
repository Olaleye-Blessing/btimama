import { FC } from "react";
import { MdOutlinePeople } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { useProfileQuery } from "../services/github";

export interface Profile {
    "login": string;
    "id": number;
    "avatar_url": string;
    "html_url": string;
    "name": string;
    "company": null | string;
    "blog": string;
    "location": string;
    "email": null | string;
    "hireable": null | boolean;
    "bio": null | string;
    "twitter_username": null | string;
    "public_repos": number;
    "public_gists": number;
    "followers": number;
    "following": number;
}

const Info: FC = () => {
    const { data, isLoading, isError } = useProfileQuery();

    if (isLoading) return <div>Loading....</div>;
    if (isError) return <div>Error....</div>;

    let profile = data!;

    return (
        <section className="profile__info">
            <figure className="profile__img">
                <img alt={profile.name} src={profile.avatar_url} />
            </figure>
            <p className="profile__name">
                <span>{profile.name}</span>
                <span>{profile.login}</span>
            </p>
            {profile.bio && <p className="profile__bio">{profile.bio}</p>}
            <button className="profile__follow">Follow</button>
            <div className="flex profile__following--cont">
                <figure className="flex profile__following--icon">
                    <MdOutlinePeople />
                </figure>
                <p>
                    <span>{profile.followers}</span> followers
                </p>
                <p>
                    <span>{profile.following}</span> following
                </p>
            </div>
            {profile.location && (
                <p className="flex profile__location">
                    <span className="flex">
                        <GoLocation />
                    </span>
                    {profile.location}
                </p>
            )}
            {profile.email && (
                <p className="flex profile__links">
                    <span className="flex">
                        <AiOutlineMail />
                    </span>
                    <a className="flex" href="https://">
                        {profile.email}
                    </a>
                </p>
            )}
            {profile.blog && (
                <p className="flex profile__links">
                    <span className="flex">
                        <BsLink45Deg />
                    </span>
                    <a className="flex" href={profile.blog}>
                        {profile.blog}
                    </a>
                </p>
            )}
            {profile.twitter_username && (
                <p className="flex profile__links">
                    <span className="flex">
                        <AiOutlineTwitter />
                    </span>
                    <a
                        className="flex"
                        href={`https://www.twitter.com/${profile.twitter_username}`}
                    >
                        {profile.twitter_username}
                    </a>
                </p>
            )}
        </section>
    );
};

export default Info;
