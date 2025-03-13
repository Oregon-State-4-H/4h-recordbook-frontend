export interface CustomProjectFields {
  description: string;
  end_date: Date;
  name: string;
  start_date: Date;
  type: string;
  year: string;
}

export type AutoProjectFields = {
  id: string;
  user_id: string;
  created: string;
  updated: string;
};

export type Project = CustomProjectFields & AutoProjectFields;

export type AnimalProjectFields = {
  animal_cost: string;
  beginning_date: string;
  beginning_weight: number;
  birth_date: string;
  created: string;
  dam_breed: string;
  end_date: string;
  end_weight: number;
  name: string;
  project_id: string;
  purchase_date: string;
  quality_grade: string;
  sale_price: string;
  sire_breed: string;
  species: string;
  yield_grade: string;
};

export type Animal = AutoProjectFields & AnimalProjectFields;

export type DailyFeedProjectFields = {
  animal_id: string;
  feed_amount: 0;
  feed_date: string;
  feed_id: string;
  feed_purchase_id: string;
  project_id: string;
};

export type DailyFeed = AutoProjectFields & DailyFeedProjectFields;

export type ExpenseProjectFields = {
  cost: 0;
  date: string;
  items: string;
  project_id: string;
  quantity: 0;
};

export type Expense = AutoProjectFields & ExpenseProjectFields;

export type FeedProjectFields = {
  name: string;
  project_id: string;
};

export type Feed = AutoProjectFields & FeedProjectFields;

export type FeedPurchaseProjectFields = {
  amount_purchased: 0;
  date_purchased: string;
  feed_id: string;
  project_id: string;
  total_cost: 0;
};

export type FeedPurchase = AutoProjectFields & FeedPurchaseProjectFields;

export type SupplyProjectFields = {
  description: string;
  end_value: 0;
  project_id: string;
  start_value: 0;
};

export type Supply = AutoProjectFields & SupplyProjectFields;

export type AnimalProjectTypes =
  | Animal
  | DailyFeed
  | Expense
  | Feed
  | FeedPurchase
  | Supply;

export function isProject(data: Project | undefined): data is Project {
  return typeof (data as Project) != undefined;
}

export const fetchAllProjects = async (): Promise<Project[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project`, {
      method: "GET",
      credentials: "include",
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Unexpected error occurred");
    }
    return data.projects as Project[];
  } catch (error) {
    throw error;
  }
};

export const fetchProject = async (
  projectID: string
): Promise<Project | string> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/project/${projectID}`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Unexpected error occurred");
    }
    return data.project as Project;
  } catch (error) {
    const err: string = "error";
    return err;
  }
};

export const postProject = async (project: CustomProjectFields) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(project),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Unexpected error occurred");
    }
    return true;
  } catch (error) {
    throw error;
  }
};

export const updateProject = async (
  projectID: string,
  project: CustomProjectFields
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/project/${projectID}`,
      {
        method: "PUT",
        credentials: "include",
        body: JSON.stringify(project),
      }
    );

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Unexpected error occurred");
    }
    return true;
  } catch (error) {
    throw error;
  }
};

export const deleteProject = async (projectID: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/project/${projectID}`,
      {
        method: "DELETE",
        credentials: "include",
      }
    );

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Unexpected error occurred");
    }
    return true;
  } catch (error) {
    throw error;
  }
};
