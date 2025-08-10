import React from "react";
import { getUserFriends } from "../lib/api";
import { useQuery } from "@tanstack/react-query";
import { getLanguageFlag } from "../components/FriendsCard";
import { capitialize } from "../lib/utils";
import NoFriendsFound from "../components/NoFriendsFound";

const FriendsPage = () => {
    const { data: friends = [], isLoading: loadingFriends } = useQuery({
        queryKey: ["friends"],
        queryFn: getUserFriends,
    });
    return (
        <div className="w-full min-h-[80vh] p-2">
            <h1 className="text-xl font-semibold">Your Friends</h1>
            <hr className="text-primary/10 w-full my-2" />
            <div className="flex flex-col gap-2">
                {loadingFriends && (
                    <div className="flex justify-center items-center">
                        <span className="loading loading-dots loading-lg"></span>
                    </div>
                )}
                {friends.length > 0 ? (
                    friends.map((friend) => (
                        <div
                            key={friend._id}
                            className="card bg-base-200 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="card-body p-5 space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="avatar size-16 rounded-full">
                                        <img
                                            src={friend.profilePic}
                                            alt={friend.fullName}
                                        />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-lg">
                                            {friend.fullName}
                                        </h3>
                                        {friend.location && (
                                            <div className="flex items-center text-xs opacity-70 mt-1">
                                                <MapPinIcon className="size-3 mr-1" />
                                                {friend.location}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Languages with flags */}
                                <div className="flex flex-wrap gap-1.5">
                                    <span className="badge badge-secondary p-1">
                                        {getLanguageFlag(friend.nativeLanguage)}
                                        Native:{" "}
                                        {capitialize(friend.nativeLanguage)}
                                    </span>
                                    <span className="badge badge-outline p-1">
                                        {getLanguageFlag(
                                            friend.learningLanguage,
                                        )}
                                        Learning:{" "}
                                        {capitialize(friend.learningLanguage)}
                                    </span>
                                </div>

                                {friend.bio && (
                                    <p className="text-sm opacity-70">
                                        {friend.bio}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <NoFriendsFound />
                )}
            </div>
        </div>
    );
};

export default FriendsPage;
