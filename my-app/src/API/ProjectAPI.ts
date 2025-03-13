export interface CustomProjectFields {
  description: string;
  end_date: Date;
  name: string;
  start_date: Date;
  type: string;
  year: string;
}

export type Project = CustomProjectFields & {
  id: string;
  user_id: string;
  created: string;
  updated: string;
};

export type Animal = {
  animal_cost: string;
  beginning_date: string;
  beginning_weight: number;
  birth_date: string;
  created: string;
  dam_breed: string;
  end_date: string;
  end_weight: number;
  id: string;
  name: string;
  project_id: string;
  purchase_date: string;
  quality_grade: string;
  sale_price: string;
  sire_breed: string;
  species: string;
  updated: string;
  user_id: string;
  yield_grade: string;
};

export type DailyFeed = {
  animal_id: string;
  created: string;
  feed_amount: 0;
  feed_date: string;
  feed_id: string;
  feed_purchase_id: string;
  id: string;
  project_id: string;
  updated: string;
  user_id: string;
};

export type Expense = {
  cost: 0;
  created: string;
  date: string;
  id: string;
  items: string;
  project_id: string;
  quantity: 0;
  updated: string;
  user_id: string;
};

export type Feed = {
  created: string;
  id: string;
  name: string;
  project_id: string;
  updated: string;
  user_id: string;
};

export type FeedPurchase = {
  amount_purchased: 0;
  created: string;
  date_purchased: string;
  feed_id: string;
  id: string;
  project_id: string;
  total_cost: 0;
  updated: string;
  user_id: string;
};

export type Supply = {
  created: string;
  description: string;
  end_value: 0;
  id: string;
  project_id: string;
  start_value: 0;
  updated: string;
  user_id: string;
};

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
