export type Project = {
  _id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  client: string;
  sector: string;
  location: string;
  link: string;
};

export const projects: Project[] = [
  {
    _id: "one-thousand-museum",
    title: "One Thousand Museum",
    description:
      "A premiere address in Toronto's Financial District, 160 Front Street West is a 46-story structural steel-framed commercial office tower designed to add a distinctive silhouette to the City's skyline. Although complex, PCL's in-house building envelope experts optimized design and constructability of the curved cladding that wraps all four exterior walls and integrates the heritage masonry of the 70-year-old, six-story building previously located on the site.",
    image: "/images/projects/1.png",
    tags: ["residential"],
    client: "Cadillac Fairview Corporation Limited",
    sector: "Buildings",
    location: "New York, NY",
    link: "/projects/one-thousand-museum/",
  },
  {
    _id: "station-home",
    title: "Station Home",
    description:
      "A premiere address in Toronto's Financial District, 160 Front Street West is a 46-story structural steel-framed commercial office tower designed to add a distinctive silhouette to the City's skyline. Although complex, PCL's in-house building envelope experts optimized design and constructability of the curved cladding that wraps all four exterior walls and integrates the heritage masonry of the 70-year-old, six-story building previously located on the site.",
    image: "/images/projects/2.png",
    tags: ["public-buildings"],
    client: "Bolla Market",
    sector: "Commercial",
    location: "Brooklyn, NY",
    link: "/projects/station-home/",
  },
  {
    _id: "railcar-factory",
    title: "Railcar Factory",
    description:
      "A premiere address in Toronto's Financial District, 160 Front Street West is a 46-story structural steel-framed commercial office tower designed to add a distinctive silhouette to the City's skyline. Although complex, PCL's in-house building envelope experts optimized design and constructability of the curved cladding that wraps all four exterior walls and integrates the heritage masonry of the 70-year-old, six-story building previously located on the site.",
    image: "/images/projects/3.png",
    tags: ["hospitality"],
    client: "Bolla Market",
    sector: "Commercial",
    location: "Brooklyn, NY",
    link: "/projects/railcar-factory/",
  },
  {
    _id: "park-offices-2",
    title: "Park Offices",
    description:
      "A premiere address in Toronto's Financial District, 160 Front Street West is a 46-story structural steel-framed commercial office tower designed to add a distinctive silhouette to the City's skyline. Although complex, PCL's in-house building envelope experts optimized design and constructability of the curved cladding that wraps all four exterior walls and integrates the heritage masonry of the 70-year-old, six-story building previously located on the site.",
    image: "/images/projects/4.png",
    tags: ["hospitality"],
    client: "Urban Development Group",
    sector: "Projects",
    location: "Chicago, IL",
    link: "/projects/park-offices-2/",
  },
  {
    _id: "maly-building",
    title: "Maly Building",
    description:
      "A premiere address in Toronto's Financial District, 160 Front Street West is a 46-story structural steel-framed commercial office tower designed to add a distinctive silhouette to the City's skyline. Although complex, PCL's in-house building envelope experts optimized design and constructability of the curved cladding that wraps all four exterior walls and integrates the heritage masonry of the 70-year-old, six-story building previously located on the site.",
    image: "/images/projects/5.png",
    tags: ["buildings", "public-buildings", "residential"],
    client: "Metropolitan Housing Authority",
    sector: "Projects",
    location: "Boston, MA",
    link: "/projects/maly-building/",
  },
  {
    _id: "park-offices",
    title: "Park Offices",
    description:
      "A premiere address in Toronto's Financial District, 160 Front Street West is a 46-story structural steel-framed commercial office tower designed to add a distinctive silhouette to the City's skyline. Although complex, PCL's in-house building envelope experts optimized design and constructability of the curved cladding that wraps all four exterior walls and integrates the heritage masonry of the 70-year-old, six-story building previously located on the site.",
    image: "/images/projects/6.png",
    tags: ["buildings", "residential"],
    client: "Green Space Developers",
    sector: "Projects",
    location: "Seattle, WA",
    link: "/projects/park-offices/",
  },
  {
    _id: "kitchen-renovation",
    title: "Kitchen Renovation",
    description:
      "A premiere address in Toronto's Financial District, 160 Front Street West is a 46-story structural steel-framed commercial office tower designed to add a distinctive silhouette to the City's skyline. Although complex, PCL's in-house building envelope experts optimized design and constructability of the curved cladding that wraps all four exterior walls and integrates the heritage masonry of the 70-year-old, six-story building previously located on the site.",
    image: "/images/projects/7.png",
    tags: ["renovation"],
    client: "Home Improvement Specialists",
    sector: "Projects Small Renovation Company",
    location: "Austin, TX",
    link: "/projects/kitchen-renovation/",
  },
  {
    _id: "astor-place-boutique-condo",
    title: "Astor Place Boutique Condo",
    description:
      "A premiere address in Toronto's Financial District, 160 Front Street West is a 46-story structural steel-framed commercial office tower designed to add a distinctive silhouette to the City's skyline. Although complex, PCL's in-house building envelope experts optimized design and constructability of the curved cladding that wraps all four exterior walls and integrates the heritage masonry of the 70-year-old, six-story building previously located on the site.",
    image: "/images/projects/8.png",
    tags: ["heavy-industrial", "renovation"],
    client: "Luxury Living Developers",
    sector: "Projects Small Renovation Company",
    location: "Miami, FL",
    link: "/projects/astor-place-boutique-condo/",
  },
  {
    _id: "floor-and-railing-repairs",
    title: "Floor and Railing Repairs",
    description:
      "A premiere address in Toronto's Financial District, 160 Front Street West is a 46-story structural steel-framed commercial office tower designed to add a distinctive silhouette to the City's skyline. Although complex, PCL's in-house building envelope experts optimized design and constructability of the curved cladding that wraps all four exterior walls and integrates the heritage masonry of the 70-year-old, six-story building previously located on the site.",
    image: "/images/projects/9.png",
    tags: ["renovation"],
    client: "Safe Home Renovations",
    sector: "Projects Small Renovation Company",
    location: "Denver, CO",
    link: "/projects/floor-and-railing-repairs/",
  },
  {
    _id: "small-bathroom-tiling",
    title: "Small Bathroom Tiling",
    description:
      "A premiere address in Toronto's Financial District, 160 Front Street West is a 46-story structural steel-framed commercial office tower designed to add a distinctive silhouette to the City's skyline. Although complex, PCL's in-house building envelope experts optimized design and constructability of the curved cladding that wraps all four exterior walls and integrates the heritage masonry of the 70-year-old, six-story building previously located on the site.",
    image: "/images/projects/10.png",
    tags: ["renovation"],
    client: "Bathroom Specialists Inc.",
    sector: "Projects Small Renovation Company",
    location: "Portland, OR",
    link: "/projects/small-bathroom-tiling/",
  },
  {
    _id: "roof-restoration-coventry",
    title: "Roof Restoration Coventry",
    description:
      "A premiere address in Toronto's Financial District, 160 Front Street West is a 46-story structural steel-framed commercial office tower designed to add a distinctive silhouette to the City's skyline. Although complex, PCL's in-house building envelope experts optimized design and constructability of the curved cladding that wraps all four exterior walls and integrates the heritage masonry of the 70-year-old, six-story building previously located on the site.",
    image: "/images/projects/11.png",
    tags: ["heavy-industrial", "renovation"],
    client: "Roof Masters LLC",
    sector: "Projects Small Renovation Company",
    location: "Atlanta, GA",
    link: "/projects/roof-restoration-coventry/",
  },
  {
    _id: "john-mayer-kitchen-renovation",
    title: "John Mayer Kitchen Renovation",
    description:
      "A premiere address in Toronto's Financial District, 160 Front Street West is a 46-story structural steel-framed commercial office tower designed to add a distinctive silhouette to the City's skyline. Although complex, PCL's in-house building envelope experts optimized design and constructability of the curved cladding that wraps all four exterior walls and integrates the heritage masonry of the 70-year-old, six-story building previously located on the site.",
    image: "/images/projects/12.png",
    tags: ["renovation"],
    client: "Celebrity Homes Inc.",
    sector: "Projects Small Renovation Company",
    location: "Los Angeles, CA",
    link: "/projects/john-mayer-kitchen-renovation/",
  },
  {
    _id: "one-south-first-with-long-title-here-and-here",
    title: "One South First with long title here and here",
    description:
      "A premiere address in Toronto's Financial District, 160 Front Street West is a 46-story structural steel-framed commercial office tower designed to add a distinctive silhouette to the City's skyline. Although complex, PCL's in-house building envelope experts optimized design and constructability of the curved cladding that wraps all four exterior walls and integrates the heritage masonry of the 70-year-old, six-story building previously located on the site.",
    image: "/images/projects/13.png",
    tags: ["buildings", "hospitality", "residential"],
    client: "Mega Development Corp",
    sector: "Projects",
    location: "Houston, TX",
    link: "/projects/one-south-first-with-long-title-here-and-here/",
  },
  {
    _id: "betances-residence",
    title: "Betances Residence",
    description:
      "A premiere address in Toronto's Financial District, 160 Front Street West is a 46-story structural steel-framed commercial office tower designed to add a distinctive silhouette to the City's skyline. Although complex, PCL's in-house building envelope experts optimized design and constructability of the curved cladding that wraps all four exterior walls and integrates the heritage masonry of the 70-year-old, six-story building previously located on the site.",
    image: "/images/projects/14.png",
    tags: ["buildings", "residential"],
    client: "Urban Living Solutions",
    sector: "Projects",
    location: "Philadelphia, PA",
    link: "/projects/betances-residence/",
  },
  {
    _id: "betances-residence-2",
    title: "Betances Residence",
    description:
      "A premiere address in Toronto's Financial District, 160 Front Street West is a 46-story structural steel-framed commercial office tower designed to add a distinctive silhouette to the City's skyline. Although complex, PCL's in-house building envelope experts optimized design and constructability of the curved cladding that wraps all four exterior walls and integrates the heritage masonry of the 70-year-old, six-story building previously located on the site.",
    image: "/images/projects/15.png",
    tags: ["buildings", "residential"],
    client: "Urban Living Solutions",
    sector: "Projects",
    location: "Philadelphia, PA",
    link: "/projects/betances-residence-2/",
  },
  {
    _id: "minimal-home",
    title: "Minimal home",
    description:
      "A premiere address in Toronto's Financial District, 160 Front Street West is a 46-story structural steel-framed commercial office tower designed to add a distinctive silhouette to the City's skyline. Although complex, PCL's in-house building envelope experts optimized design and constructability of the curved cladding that wraps all four exterior walls and integrates the heritage masonry of the 70-year-old, six-story building previously located on the site.",
    image: "/images/projects/16.png",
    tags: ["residential"],
    client: "Simple Living Architects",
    sector: "Projects",
    location: "San Francisco, CA",
    link: "/projects/minimal-home/",
  },
  {
    _id: "residential-in-soho",
    title: "Residential in SoHo",
    description:
      "A premiere address in Toronto's Financial District, 160 Front Street West is a 46-story structural steel-framed commercial office tower designed to add a distinctive silhouette to the City's skyline. Although complex, PCL's in-house building envelope experts optimized design and constructability of the curved cladding that wraps all four exterior walls and integrates the heritage masonry of the 70-year-old, six-story building previously located on the site.",
    image: "/images/projects/17.png",
    tags: ["residential"],
    client: "Downtown Living LLC",
    sector: "Projects",
    location: "New York, NY",
    link: "/projects/residential-in-soho/",
  },
];
