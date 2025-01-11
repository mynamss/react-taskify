import moment from "moment";

export default function dateFilter(tasks, selectedFilter = "All") {
  return tasks.filter((task) => {
    if (!task.isDone) return false;

    const taskDate = moment(task.createdAt, "DD-MM-YYYY HH:mm:ss");
    const today = moment().startOf("day");
    const yesterday = moment().subtract(1, "days").startOf("day");
    const startOfWeek = moment().startOf("week");
    const startOfLastWeek = moment().subtract(1, "weeks").startOf("week");
    const endOfLastWeek = moment().subtract(1, "weeks").endOf("week");
    const startOfMonth = moment().startOf("month");
    const startOfLastMonth = moment().subtract(1, "months").startOf("month");
    const endOfLastMonth = moment().subtract(1, "months").endOf("month");

    if (selectedFilter === "Today") {
      return taskDate.isSame(today, "day");
    } else if (selectedFilter === "Yesterday") {
      return taskDate.isSame(yesterday, "day");
    } else if (selectedFilter === "This Week") {
      return taskDate.isBetween(
        startOfWeek,
        moment().endOf("week"),
        "day",
        "[]"
      );
    } else if (selectedFilter === "Last Week") {
      return taskDate.isBetween(startOfLastWeek, endOfLastWeek, "day", "[]");
    } else if (selectedFilter === "This Month") {
      return taskDate.isBetween(
        startOfMonth,
        moment().endOf("month"),
        "day",
        "[]"
      );
    } else if (selectedFilter === "Last Month") {
      return taskDate.isBetween(startOfLastMonth, endOfLastMonth, "day", "[]");
    }

    return true;
  });
}
