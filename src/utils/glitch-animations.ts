export const glitchText = (
  element: HTMLElement,
  duration: number = 300
): void => {
  const originalText = element.textContent || "";
  const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  let frame = 0;
  const maxFrames = duration / 16;

  const animate = () => {
    if (frame >= maxFrames) {
      element.textContent = originalText;
      return;
    }

    let glitchedText = "";
    for (let i = 0; i < originalText.length; i++) {
      if (Math.random() < 0.1) {
        glitchedText += chars[Math.floor(Math.random() * chars.length)];
      } else {
        glitchedText += originalText[i];
      }
    }

    element.textContent = glitchedText;
    frame++;
    requestAnimationFrame(animate);
  };

  animate();
};

export const rgbSplitEffect = (
  element: HTMLElement,
  intensity: number = 4
): void => {
  element.style.textShadow = `
    -${intensity}px 0 0 #ff006e,
    ${intensity}px 0 0 #00ff41
  `;

  setTimeout(() => {
    element.style.textShadow = "none";
  }, 200);
};

export const randomGlitch = (): string => {
  const glitchChars = ["█", "▓", "▒", "░", "▄", "▀", "▐", "▌", "▬", "▭"];
  return glitchChars[Math.floor(Math.random() * glitchChars.length)];
};

export const corruptText = (text: string, intensity: number = 0.1): string => {
  return text
    .split("")
    .map((char) => (Math.random() < intensity ? randomGlitch() : char))
    .join("");
};

export const terminalTypeEffect = (
  element: HTMLElement,
  text: string,
  speed: number = 50
): Promise<void> => {
  return new Promise((resolve) => {
    let i = 0;
    element.textContent = "";

    const typeInterval = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typeInterval);
        resolve();
      }
    }, speed);
  });
};
