import React from "react";
import StarRatings from "react-star-ratings";

const reviews = [
    {
        name: "John Doe",
        rating: 4,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ex et ligula fermentum bibendum. Duis at velit vel metus sollicitudin egestas.",
        thumbImage:
            "https://www.globalatlantic.com/professionals/sites/fp/files/styles/square/public/2022-01/Tools_to_Guide_you_image_Woman4.png.webp?itok=eXPK791D",
    },
    {
        name: "Jane Doe",
        rating: 5,
        review: "Sed euismod libero vel orci ullamcorper, eget efficitur justo commodo. Duis at velit vel metus sollicitudin egestas. Duis at velit vel metus sollicitudin egestas.",
        thumbImage:
            "https://media.licdn.com/dms/image/C4E03AQG9vQ0ZXmUYDA/profile-displayphoto-shrink_800_800/0/1517010102221?e=2147483647&v=beta&t=KlCdXDx5JkacONpOa2qXFUX_qw1hTe3JmMIlcB_zF_8",
    },
    {
        name: "Alice Smith",
        rating: 3,
        review: "Vivamus vitae erat eget sapien cursus euismod. Sed nec ligula vitae lacus bibendum cursus. Duis at velit vel metus sollicitudin egestas.",
        thumbImage:
            "https://media.istockphoto.com/id/628963392/photo/young-man-making-facial-expressions.jpg?s=612x612&w=0&k=20&c=Gck2rmBG8g8wzQm0rHzdj9Uq37ug_IGW_8YGgQg_CoU=",
    },
    {
        name: "Bob Johnson",
        rating: 4,
        review: "Phasellus nec dui vel elit aliquet ultricies ut nec quam. Suspendisse potenti. Duis at velit vel metus sollicitudin egestas.",
        thumbImage:
            "https://media.istockphoto.com/id/1153469287/photo/frontal-male-passport-photo-isolated-on-white-background-eu-standardization.jpg?s=612x612&w=0&k=20&c=-zsWSzc9Q_WgSZB79-EsSomGHD-RIC4KiOZ6o0CTx24=",
    },
    // Add more reviews as needed
];

const ReviewSection = () => {
    return (
        <div className="text-center mt-4">
            <h1 className="text-3xl mb-8">Reviews of Imedfiex Users</h1>
            <div className="flex flex-wrap">
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="flex flex-col bg-white border  rounded-lg p-4 shadow-md mb-4 hover:shadow-lg"
                        style={{
                            minWidth: "300px",
                            maxWidth: "calc(25% - 1rem)",
                            margin: "0 auto",
                            transition: "all 0.3s ease-in-out",
                        }}
                    >
                        <div className="flex items-center mb-2">
                            <img
                                src={review.thumbImage}
                                alt="Reviewer's thumb"
                                className="w-16 h-16 rounded-full mr-2"
                            />
                            <div className="text-gray-900 font-bold">{review.name}</div>
                        </div>
                        <p className="mb-2">{review.review}</p>
                        <div className="bg-[#ebdfef] rounded-md p-2">
                            <StarRatings
                                rating={review.rating}
                                starRatedColor="orange"
                                numberOfStars={5}
                                starDimension="20px"
                                starSpacing="2px"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewSection;
