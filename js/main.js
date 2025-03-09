// Scroll Animation for "Izna" Text
const rowTitles = document.querySelectorAll(".row_title-left, .row_title-right, .row_title-top");
const membersColumn = document.querySelector(".members-column");

if (rowTitles.length > 0 && membersColumn) {
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const membersColumnRect = membersColumn.getBoundingClientRect();
    const membersColumnTop = membersColumnRect.top;

    rowTitles.forEach((title) => {
      // Calculate opacity based on scroll position
      let opacity;
      if (scrollY > 0 && scrollY < membersColumnTop) {
        // Fade out as user scrolls down
        opacity = 1 - Math.min(scrollY / 300, 1); // Gradually fade out
      } else if (scrollY <= 0) {
        // Fade in as user scrolls up
        opacity = 1; // Fully visible at the top
      } else {
        // Fully faded out when reaching the members column
        opacity = 0;
      }

      // Apply the opacity
      title.style.opacity = opacity;
    });
  });
}

// Members Page - Show Selected Member (Only on members.html)
if (window.location.pathname.includes("members.html")) {
  const memberLinks = document.querySelectorAll(".member-link");
  const memberProfiles = document.querySelectorAll(".member-profile");

  // Function to show the selected member profile
  const showMemberProfile = (memberId) => {
    // Hide all member profiles
    memberProfiles.forEach((profile) => {
      profile.classList.remove("active");
    });

    // Show the selected member profile
    const selectedMember = document.getElementById(memberId);
    if (selectedMember) {
      selectedMember.classList.add("active");
    }
  };

  // Handle click events on member links
  memberLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const memberId = link.getAttribute("data-member");
      showMemberProfile(memberId);

      // Update the URL hash
      window.location.hash = memberId;
    });
  });

  // Check the URL hash on page load
  const initialMemberId = window.location.hash.substring(1); // Remove the '#' from the hash
  if (initialMemberId) {
    showMemberProfile(initialMemberId);
  } else {
    // Default to Jeemin if no hash is present
    showMemberProfile("jeemin");
  }
}

// Function to initialize TikTok embeds
function initializeTikTokEmbeds() {
    // Check if the TikTok embed script is already loaded
    if (window.tiktokEmbed) {
      window.tiktokEmbed.load(); // Reload embeds if the script is already loaded
    } else {
      // Load the TikTok embed script dynamically
      const script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }
  
  // Initialize TikTok embeds when the page loads
  window.addEventListener("load", initializeTikTokEmbeds);
  
  // Reinitialize TikTok embeds when the page is resized (for responsiveness)
  window.addEventListener("resize", initializeTikTokEmbeds);