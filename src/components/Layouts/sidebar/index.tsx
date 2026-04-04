"use client";

import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_DATA } from "./data";
import { ArrowLeftIcon, ChevronUp } from "./icons";
import { MenuItem } from "./menu-item";
import { useSidebarContext } from "./sidebar-context";

export function Sidebar() {
  const pathname = usePathname();
  const { setIsOpen, isOpen, isMobile, toggleSidebar } = useSidebarContext();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (title: string) => {
    setExpandedItems((prev) => (prev.includes(title) ? [] : [title]));

    // Uncomment the following line to enable multiple expanded items
    // setExpandedItems((prev) =>
    //   prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title],
    // );
  };

  useEffect(() => {
    // Keep collapsible open, when it's subpage is active
    NAV_DATA.some((section) => {
      return section.items.some((item) => {
        return item.items.some((subItem) => {
          if (subItem.url === pathname) {
            if (!expandedItems.includes(item.title)) {
              toggleExpanded(item.title);
            }

            // Break the loop
            return true;
          }
        });
      });
    });
  }, [pathname]);

  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && isOpen && (
        <div
          className="duration-900 fixed inset-0 z-40 bg-black/50 transition-opacity"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside
        className={cn(
          "duration-900 max-w-[230px] overflow-hidden border-r border-gray-200 bg-white transition-[width] ease-linear dark:border-gray-800 dark:bg-gray-dark",
          isMobile ? "fixed bottom-0 top-0 z-50" : "sticky top-0 h-screen",
          isOpen ? "w-[230px]" : "w-[70px]",
        )}
        aria-label="Main navigation"
        // aria-hidden={!isOpen}
        // inert={!isOpen}
        aria-hidden={false}
      >
        <div className="flex h-full flex-col py-10 pr-[7px]">
          <div className="relative pr-4.5">
            <Link
              href={"/"}
              onClick={() => isMobile && toggleSidebar()}
              className={cn(
                "px-0 py-2.5 min-[850px]:py-0",
                !isOpen && "justify-center",
              )}
            >
              <Logo />
            </Link>
          </div>

          {/* Navigation */}
          <div className="custom-scrollbar mt-6 flex-1 overflow-y-auto min-[850px]:mt-10">
            {NAV_DATA.map((section) => (
              <div key={section.label} className="mb-6">
                <h2
                  className={cn(
                    "mb-5 pl-2 text-sm font-medium text-dark-4 dark:text-dark-6",
                    !isOpen && "hidden",
                  )}
                >
                  {section.label}
                </h2>

                <nav role="navigation" aria-label={section.label}>
                  <ul className="space-y-2 overflow-hidden transition-all duration-300">
                    {section.items.map((item) => {
                      const isActiveparent = item.items?.some(
                        (sub) => sub.url === pathname,
                      );

                      return (
                        <li key={item.title}>
                          {item.items?.length ? (
                            <div>
                              <MenuItem
                                isActive={isActiveparent}
                                onClick={() => toggleExpanded(item.title)}
                              >
                                <item.icon className="size-6 shrink-0" />
                                <span
                                  className={cn(
                                    "transition-all duration-200",
                                    !isOpen && "hidden",
                                  )}
                                >
                                  {item.title}
                                </span>

                                <ChevronUp
                                  className={cn(
                                    "ml-auto rotate-180 transition-transform duration-200",
                                    !isOpen && "hidden",
                                    expandedItems.includes(item.title) &&
                                      "rotate-0",
                                  )}
                                />
                              </MenuItem>

                              {isOpen && expandedItems.includes(item.title) && (
                                <ul className="ml-1 space-y-1.5 pb-[15px] pt-2">
                                  {item.items.map((subItem) => (
                                    <li key={subItem.title}>
                                      <MenuItem
                                        as="link"
                                        href={subItem.url}
                                        isActive={pathname === subItem.url}
                                      >
                                        <span>{subItem.title}</span>
                                      </MenuItem>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ) : (
                            (() => {
                              const href =
                                "url" in item
                                  ? item.url
                                  : "/" +
                                    item.title
                                      .toLowerCase()
                                      .split(" ")
                                      .join("-");

                              return (
                                <MenuItem
                                  className="flex items-center gap-3 py-3"
                                  as="link"
                                  href={href}
                                  isActive={pathname === href}
                                >
                                  <item.icon className="size-6 shrink-0" />
                                  <span className={cn("transition-all duration-200", !isOpen && "hidden")}>
                                    {item.title}
                                  </span>
                                </MenuItem>
                              );
                            })()
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
