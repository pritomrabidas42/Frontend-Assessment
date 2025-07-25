"use"
export async function getProduct() {
  // Try actual fetch first
  try {
    const res = await fetch("https://api.growskill.com/api/v1/product/munzereen-ielts-course", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Network response was not ok");
    return await res.json();
    console.log(res);
  } catch (error) {
    console.error("API fetch failed:", error);
    
    // ✅ Use fallback mock data
    return {
      title: "IELTS Course by Munzereen Shahid",
      description: "Mocked description of the IELTS course.",
      price: 999,
      button_text: "Enroll Now",
      abouts: [
        { title: "Course Overview", description: "This is a mock course overview." },
        { title: "Who Should Join", description: "Anyone looking to improve IELTS score." },
      ],
      checklist: [
        { title: "Grammar Practice" },
        { title: "Speaking Test" },
        { title: "Mock Exams" },
      ],
    };
  }
}
