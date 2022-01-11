import Image from 'next/image'

// 3 recomendations
// The current imageSrc link is the Profile Picture from my LinkedIn. You must replace it by any other.

const recommendations = [
    {
        imageSrc:
          "https://media-exp1.licdn.com/dms/image/C4E03AQFzZO6z1nKc5g/profile-displayphoto-shrink_200_200/0/1603050407630?e=1647475200&v=beta&t=uvj3o5d2icaQcNWiAXMzNSRfMOOQoTdfJjDPrx_9JeY",
        quote:
          "Mike is one of the most creative, technical and positive people I know. He is a master at developing content that is engaging, organized and easy to take in and retain. He is a natural teacher, always thinking about the learner and creating the best experience possible. At Mindset Digital, we also relied on Mike to problem solve our technical needs, not just in the training space, but also on the data and reporting side. He gave me the resources that made me a better project manager. In fact, we are still using tools and templates he developed years ago.<BR><BR>In addition to his technical and creative talents, Mike is a joy to work with – extremely patient, flexible and always willing to help. When you work with Mike, he gives you his undivided attention no matter how busy he might be. With his unique skills, he is an invaluable asset to any company. I would welcome the opportunity to work with him again in the future.",
        customerName: "Andrea webber"
      },
      {
        imageSrc:
          "https://media-exp1.licdn.com/dms/image/C5603AQEQEcaeL-8XXQ/profile-displayphoto-shrink_200_200/0/1534944424674?e=1647475200&v=beta&t=FEcOuLZk5L7iErk4gmMsWP52U6tNsVLU5ceiEgvs704",
        quote:
          "The tools and techniques Mike shared in his DevLearn workshop <i>Strategies from the Marketing Playbook</i> were some of the best actionable tips on how to navigate all the tools available in L&D and Marketing. I find their words still positively impacting my daily life, along with the tools I have made part of my daily practice (Feedly, Canva). Mike’s weekly L&D recap email is the way to stay up to date in the industry, he is an inspirational thought leader, connecting others around the world by sharing their work.",
        customerName: "Farien Masanz"
      },
      {
        imageSrc:
          "https://media-exp1.licdn.com/dms/image/C5603AQG_ZOAnPBZHvA/profile-displayphoto-shrink_200_200/0/1516356986687?e=1647475200&v=beta&t=jb4KsJJIrLp91l0npe0Wx9NbvyFdT4gTn00jgBAo6y0",
        quote:
          "Mike is a creative and innovative learning development professional. His excellent consulting skills help clients clarify their needs and discover creative and efficient solutions. Through a primary focus on performance improvement, he has helped to create critical thinking around learning decisions.<BR><BR>Mike has been engaged in several business critical projects during his time at American Electric Power. He contributes positively to team work processes as a member and lead. He successfully collaborates with people at all levels of responsibility and diverse professional backgrounds.<BR><BR>Mike is a self-starter who is professionally motivated to contribute to create value in the organization. As a thought leader in our organization he has helped us challenge our thinking and improve our performance.",
        customerName: "Sal Piazza"
      }
  ]

  export default function Recommendation() {
    return (
    <div id="recomendations" className="static">
      <div className="max-w-screen-xl mx-auto py-20 lg:py-24">
        <h5 className="font-bold text-primary-500 text-center text-gray-600">
            From My LinkedIn Profile Page</h5>
        <h2 className="text-4xl sm:text-5xl font-black tracking-wide text-center text-gray-500">
            Recommendations</h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch">
          {recommendations.map((recommendation, index) => (
            <div className="mt-16 lg:w-1/3" key={index}>
              <div className="bg-white px-4 text-center max-w-xs mx-auto flex flex-col items-center">
                <div className="mt-5 text-gray-600 font-medium leading-loose">
                    <blockquote>{recommendation.quote}</blockquote>
                </div>
              <Image
                src={recommendation.imageSrc}
                alt={recommendation.customerName}
                width={100}
                height={100}
                className="rounded-full"
                />
                <div className="mt-5 text-gray-900 font-semibold uppercase text-sm tracking-wide">
                    <p>- {recommendation.customerName}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
