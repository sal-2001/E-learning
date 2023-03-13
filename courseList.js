export const courseList = [
    {
        id: 1,
        title: "Physics",
        imgUrl: "https://images.theconversation.com/files/191827/original/file-20171025-25516-g7rtyl.jpg?ixlib=rb-1.1.0&rect=0%2C70%2C7875%2C5667&q=45&auto=format&w=926&fit=clip",
        lectures: 20,
        duration: 30,
        videos: [
            {link: "/videos/Physics.mp4",
             questions: ["What is einstein's theory of relativity equation ?",
             "How many laws of motions did Newton has proposed?" ],
             answers: [["E=mc^2", "F=ma", "E=mc"],["1","2","3"]],
             correct: ["E=mc^2","3"]
            }
        ]
    },
    {
        id: 2,
        title: "Chemistry",
        imgUrl: "https://img.freepik.com/free-vector/hand-drawn-chemistry-background_23-2148164901.jpg?w=2000",
        lectures: 30,
        duration: 40,
        videos: [
            {link: "/videos/Chemistry.mp4",
             questions: ["How many elements are in Periodic table?", 
             "Which is the most abundant element in the universe?"],
             answers: [["114", "118", "112"],["Nitrogen","Oxygen","Hydrogen"]],
             correct: ["118", "Hydrogen"]
            }
        ]
    },
    {
        id: 3,
        title: "Maths",
        imgUrl: "https://ichef.bbci.co.uk/images/ic/1920x1080/p074yf06.jpg",
        lectures: 25,
        duration: 35,
        videos: [
            {link: "/videos/Mathematics.mp4",
             questions: ["The area of a rectangle with length a & breadth b is ___",
              "How many sides does a hexagon have?"],
             answers: [["a+b", "a*b", "2*(a+b)"],["4","5","6"]],
             correct: ["a*b", "6"]
            }
        ]
    },
    {
        id: 4,
        title: "Biology",
        imgUrl: "https://as1.ftcdn.net/v2/jpg/04/07/37/74/1000_F_407377427_cAi21m47R3TLy1vulqo0W7P9aWV9eiQ7.jpg",
        lectures: 32,
        duration: 37,
        videos: [
            {link: "/videos/Biology.mp4",
             questions: ["What do we call the most basic structure of living things?",
            "What does DNA stand for?"],
             answers: [["DNA","Cell","Skin"],["Deoxyribonucleic Acid", "Dehydrogenated Acid", "Decreased Nature Alliance"]
             ],
             correct: ["Cell","Deoxyribonucleic Acid"]
            }
        ]
    },
    {
        id: 5,
        title: "IT",
        imgUrl: "https://img.freepik.com/free-vector/illustration-social-media-concept_53876-18139.jpg",
        lectures: 40,
        duration: 60,
        videos: [
            {link: "/videos/IT.mp4",
             questions: ["Who is known as the father of computer?","What is the brain of the computer system called?"],
             answers: [["Bill Gates", "Dennis Ritchie", "Charles Babbage"], ["RAM", "CPU", "GPU"]],
             correct: ["Charles Babbage", "CPU"]
            }
        ]
    },
]