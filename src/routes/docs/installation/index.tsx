import { createFileRoute } from "@tanstack/react-router";
import { StructuredData } from "@/components/StructuredData";
import InstallationPageClient from "./-InstallationClient";

const installationHowTo = {
  name: "How to Install Pawn Appétit",
  description: "Step-by-step guide to install Pawn Appétit chess GUI on Windows, macOS, or Linux.",
  totalTime: "PT5M",
  steps: [
    {
      name: "Download the Installer",
      text: "Go to the download section and select the installer for your operating system (Windows .msi, macOS .dmg, or Linux .AppImage).",
      url: "https://pawnappetit.com/docs/installation#download",
    },
    {
      name: "Run the Installer",
      text: "Double-click the downloaded file. On Windows, follow the wizard. On macOS, drag the app to Applications. On Linux, make the AppImage executable and run it.",
      url: "https://pawnappetit.com/docs/installation#run",
    },
    {
      name: "Launch the Application",
      text: "Open Pawn Appétit from your desktop or applications menu.",
      url: "https://pawnappetit.com/docs/installation#launch",
    },
  ],
};

export const Route = createFileRoute("/docs/installation/")({
  component: InstallationPage,
  head: () => ({
    meta: [
      {
        title: "Install Pawn Appétit - Free Chess GUI for Windows, macOS & Linux",
      },
      {
        name: "description",
        content:
          "Download and install Pawn Appétit chess analysis software. Step-by-step guide for Windows, macOS, and Linux installation. System requirements and troubleshooting.",
      },
    ],
  }),
});

function InstallationPage() {
  return (
    <>
      <StructuredData
        howTo={installationHowTo}
        withSoftware={true}
        withOrganization={false}
        withWebSite={false}
      />
      <InstallationPageClient />
    </>
  );
}
