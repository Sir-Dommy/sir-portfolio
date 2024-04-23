// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Joseck Osugo',
    image: "images/osugo.jpg",
    designation: 'React JS | NEXT JS | Node | MySQL',
    view: "Hey everyone! I wanted to take a moment to recommend Dominick Kyengo for any Software Development opportunities. I had the pleasure of working with him on multiple projects where he showcased a strong understanding of Software Development concepts and delivered high-quality code. He consistently demonstrated a willingness to learn and grow, and his enthusiasm for tackling new challenges was contagious. Domimick is a reliable and dedicated team member who would be a great asset to any React.js team. Highly recommended! 👍! 🌟",
    linkednURL: "https://www.linkedin.com/in/joseck-osugo"
  },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
